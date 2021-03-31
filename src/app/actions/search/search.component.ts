import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { _fakeDataService } from 'src/services/_fake-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() msg:string="";

  data:{id:number,type:string,title:string,content:string} []=[];
  constructor(private fakeData : _fakeDataService,
    private router: Router,
    private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.fakeData.getDataTableFake({}).subscribe(rs=>{
      this.data= rs;
      
    })
  }

}
