import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';
import {_fakeDataService} from 'src/services/_fake-data.service';
import {filter} from 'rxjs/operators';
import {dataClass} from '../../../services/data';


@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  data: Array<dataClass> = [];

  constructor(private fakeData: _fakeDataService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.fakeData.getDataTableFake({}).subscribe(rs => {
      this.data = rs.result;

    });
  }

  detail(param: any) {
    console.log(param);
    this.router.navigate(['agents/detail'], {queryParams: {id: param}});
  }

  delete(index: any) {
    this.fakeData.deleteData(index);

  }

  edit(_id: any) {
    this.router.navigate(['agents/edit'], {queryParams: {id: _id}});
  }

  search(input: any) {
    console.log(input.value);
    this.fakeData.searchData(input.value.toLocaleLowerCase()).subscribe(rs => {
      this.data = rs.result;
    });
  }
}
