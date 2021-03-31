import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { _fakeDataService } from 'src/services/_fake-data.service';
import { dataClass } from 'src/services/data';
import {  FormGroup, Validators,ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  data:{id:number,type:string,kind:string,title:string,content:string} []=[];
  typeData:any=[];


  @ViewChild(FormComponent,{static:false}) formComponent? : FormComponent;
  addForm!: FormGroup;


  constructor(private router: Router,
    private fakeData : _fakeDataService,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
    ) { }



  ngOnInit(): void {
    this.fakeData.getDataTableFake({}).subscribe(rs=>{
      this.data= rs.result;;
    })
    this.typeData = this.data.reduce((accumalator:any, current) => {
      if(!accumalator.find((item: { [x: string]: string; }) => item['type'] === current['type'])) {
        accumalator.push(current);
      }
      return accumalator;

    },[]);
    console.log(this.formComponent?.getFormDefault().value);

  }


  onSubmit(type:any) {
    this.formComponent?.setId(this.data[this.data.length-1].id+1);
    this.fakeData.addData(this.formComponent?.form.value)
    
    console.log(this.formComponent?.form.value)
    switch(this.formComponent?.form.controls['type'].value.toLowerCase( )){
      case 'agents': this.router.navigate(['/agents']);break;
      case  'guns': this.router.navigate(['/guns']);break;
      case 'maps': this.router.navigate(['/maps']);break;
    }
    alert("Save new "+this.formComponent?.form.controls['type'].value+" blog success")

  }
}
