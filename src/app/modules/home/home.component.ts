import { Component, Input, OnInit } from '@angular/core';
import user_data from 'src/app/static_data/user_data.json';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { _fakeDataService } from 'src/services/_fake-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg:any;
  data:{id:number,type:string,title:string,content:string} []=[];
  isHome=true;

  constructor(private fakeData : _fakeDataService,
    private router: Router,
    private route:ActivatedRoute) { }
    
  public user:{username:string, password:string}[] = user_data;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{this.msg=params['search']})
    console.log(this.msg)


    this.fakeData.getDataTableFake({}).subscribe(rs=>{
      this.data= rs.result;
      this.data=this.data.filter(item=>item.title.toLocaleLowerCase().match(this.msg))
    })
  }

  


}
