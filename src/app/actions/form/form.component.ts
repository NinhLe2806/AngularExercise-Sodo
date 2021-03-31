import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { _fakeDataService } from 'src/services/_fake-data.service';
import { dataClass } from 'src/services/data';
import {  FormGroup, Validators,ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data:{id:number,type:string,kind:string,title:string,content:string} []=[];
  typeData:any=[];
  form!:FormGroup;
  
  constructor(private router: Router,
    private fakeData : _fakeDataService,
    private route:ActivatedRoute,
    private fb:FormBuilder) { }


  public getFormDefault() : FormGroup{
      this.form = this.fb.group({
          id: new FormControl(),
          type: new FormControl(this.typeData[0].type, [Validators.required]),
          title: new FormControl('', [Validators.required]),
          content: new FormControl('', [Validators.required]),
          kind: new FormControl(''),
      })
      return this.form;
  }
  public setId(_id:any) {
    this.form.controls['id'].setValue(_id)
  }

  setFormDefault(from: FormGroup, data:dataClass) {
    from.get('id')!.setValue(data.id);
    from.get('type')!.setValue(data.type);
    from.get('title')!.setValue(data.title);
    from.get('content')!.setValue(data.content);
    from.get('kind')!.setValue(data.kind);

  }

  setFormData(data:dataClass){
    this.setFormDefault(this.form,data);
  }

  ngOnInit(): void {
    this.fakeData.getDataTableFake({}).subscribe(rs=>{
      this.data= rs.result;
    })
    this.typeData = this.data.reduce((accumalator:any, current) => {
      if(!accumalator.find((item: { [x: string]: string; }) => item['type'] === current['type'])) {
        accumalator.push(current);
      }
      return accumalator;
      
    },[]);
    this.getFormDefault();
  }

}
