import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit  ,ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { _fakeDataService } from 'src/services/_fake-data.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  
  data:{id:number,type:string,kind:string,title:string,content:string} []=[];

  
  constructor(private fakeData : _fakeDataService,
    private router: Router,
    private route:ActivatedRoute) {}
  
  detail(param:any){ 
    console.log(param)
    this.router.navigate(['/agents/agents-guide'],{queryParams:{  id: param}});
  }  

  delete(_id:number){
    const index = this.data.findIndex(data=>data['id']==_id);
    this.data.splice(index,1);
    
  }

  edit(_id:number){
    this.router.navigate(['/actions/edit'],{queryParams:{id:_id}});
  }

  ngOnInit(): void {
    
    this.fakeData.getDataTableFake({}).subscribe(rs=>{
        this.data= rs.result;
      
    })
  }
}
