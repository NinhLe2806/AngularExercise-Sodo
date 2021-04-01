import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { _fakeDataService } from 'src/services/_fake-data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data:{id:number,type:string,title:string,content:string} []=[];
  isSearch=false;
  msg ='';

  constructor(private fakeData : _fakeDataService,
    private router: Router,
    private route:ActivatedRoute) {}

  turnOffSearch(){
    this.isSearch=false;
  }
  search(input:any){
    this.isSearch=true;
    console.log(this.msg);
    this.msg=input.value
    if(input.value=="") this.isSearch=false;

  }

  ngOnInit(): void {
    this.fakeData.getDataTableFake({}).subscribe(rs=>{
      this.data= rs.result;

    })
  }

}
