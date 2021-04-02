import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {dataClass} from './data';


export interface api {
  error?: boolean,
  count?: number,
  result?: any
}

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class _fakeDataService {


  data: Array<dataClass> = [
    {
      id: 1,
      type: 'Agents',
      kind: 'Newbie',
      title: 'Astra - Valorant Agent Guide',
      content: ' The 15th Valorant agent, Astra,.'
    },
    {
      id: 2,
      type: 'Agents',
      kind: 'Pro',
      title: 'Sova I am the hunter',
      content: 'Main Sova'
    },
    {
      id: 3,
      type: 'Maps',
      kind: 'Pro',
      title: 'Icebox',
      content: 'Icebox was released at the beginning of Act III and takes place in a tundra climate. The map has a ton of verticality and angles to cover so it’s the most complex map released yet.'
    },
    {
      id: 4,
      type: 'Guns',
      kind: 'Newbie',
      title: 'Vandals',
      content: 'Icebox was released at the'
    },
    {
      id: 5,
      type: 'Others',
      kind: 'Newbie',
      title: 'Alo',
      content: 'Ola'
    }];

  public getDataTableFake(model: any): Observable<any> {
    const dataRes: api = {count: 0, error: false};
    dataRes.result = this.data;

    if (model.id !== undefined) {
      dataRes.result = this.data.find(item => item['id'] == model.id);
    }
    if (!dataRes.result) {
      dataRes.count = 0;
    } else {
      dataRes.count = dataRes.result.length !== undefined ? dataRes.result.length : 1;
    }
    return of(dataRes);
  }

  public addData(obj: any): Observable<any> {
    obj.id = this.data.length + 1;
    this.data.push(obj);

    const dataRes: api = {count: 0, error: false};

    dataRes.result = this.data;
    dataRes.count = this.data.length;
    return of(dataRes);
  }

  public updateData(obj: any): Observable<any> {
    const index = this.data.findIndex(item => item.id === obj.id);
    console.log(index)
    this.data[index] = obj;

    const dataRes: api = {count: 0, error: false};
    dataRes.result = this.data;
    dataRes.count = this.data.length;
    return of(dataRes);
  }

  public searchData(keyword: any): Observable<any> {
    const dataRes: api = {count: 0, error: false};
    dataRes.result = this.data;
    dataRes.result = dataRes.result.filter((res: any) => {
      return (res.title.toLocaleLowerCase().match(keyword) || res.type.toLocaleLowerCase().match(keyword));
    });
    dataRes.count = dataRes.result.length;

    return of(dataRes);
  }

  public deleteData(keyword: any): Observable<any> {
    const dataRes: api = {count: 0, error: false};
    dataRes.result = this.data;

    const index = this.data.findIndex(data => data['id'] === keyword);
    this.data.splice(index, 1);
    return of(dataRes);
  }
}

