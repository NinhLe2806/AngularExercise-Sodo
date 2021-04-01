import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { _fakeDataService } from 'src/services/_fake-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data:{id:number,type:string,title:string,content:string} []=[];

  msg:any="";
  constructor(private router: Router,
    private fakeData : _fakeDataService,
    private route:ActivatedRoute) { };
  ngOnInit(): void {
 
    
    this.route.queryParams.subscribe((params)=>{this.msg=params['id']});
      
    this.fakeData.getDataTableFake({}).subscribe(rs=>{
      this.data= rs.result;
      this.data = this.data.filter(item=>item['id']==this.msg)
    
    })
  }

}
