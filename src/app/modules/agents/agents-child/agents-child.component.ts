import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, QueryParamsHandling, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { _fakeDataService } from 'src/services/_fake-data.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-agents-child',
  templateUrl: './agents-child.component.html',
  styleUrls: ['./agents-child.component.css']
})
export class AgentsChildComponent implements OnInit {
  data:{id:number,type:string,title:string,content:string} []=[];

  msg:any="";
  constructor(private router: Router,
    private fakeData : _fakeDataService,
    private route:ActivatedRoute) { };
  ngOnInit(): void {
 
    
    this.route.queryParams.subscribe((params)=>{this.msg=params['id']});
      
    this.fakeData.getDataTableFake({}).subscribe(rs=>{
      this.data= rs;
      this.data = this.data.filter(item=>item['id']==this.msg)
    
    })
  }

}
