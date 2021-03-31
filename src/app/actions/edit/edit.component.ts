import { Component, OnInit, ViewChild,AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { _fakeDataService } from 'src/services/_fake-data.service';
import { dataClass } from 'src/services/data';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddComponent } from '../add/add.component';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dataAll :{id:number,type:string,title:string,content:string} []=[];
  data: any = [];
  msg:any;
  editForm?:FormGroup
  @ViewChild(FormComponent,{static:false}) formComponent!:FormComponent

  isLoad=false;

  constructor(private router: Router,
    private fakeData : _fakeDataService,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{this.msg=params['id']});

    this.fakeData.getDataTableFake({}).subscribe(rs=>{
      this.dataAll= rs.result;;
      this.data=this.dataAll.filter(item=>item['id']==this.msg)
    })
  }
  
  load(){
    this.isLoad=true;
    console.log(this.data[0])
    this.formComponent.setFormDefault(this.formComponent.getFormDefault(),this.data[0])
  }



  onSubmit(){
    this.fakeData.updateData(this.msg,this.formComponent?.form.value)

    switch(this.formComponent?.form.controls['type'].value.toLowerCase( )){
      case 'agents': this.router.navigate(['/agents']);break;
      case  'guns': this.router.navigate(['/guns']);break;
      case 'maps': this.router.navigate(['/maps']);break;
    }
    alert("Save new "+this.formComponent?.form.controls['type'].value+" blog success")
  }
  
  // edit(type:any,title:any,content:any,event:Event){
  //   event.preventDefault();
  //   let obj = new dataClass();
  //   obj.id=this.msg;
  //   obj.title=title.value;
  //   obj.type=type.value;
  //   obj.content=content.value;
   
  //   let index = this.dataAll.findIndex(x=>x['id']==this.msg);
  //   console.log(this.data[index]);
  //   this.dataAll[index] =obj;
    

    
    
  // }
}
