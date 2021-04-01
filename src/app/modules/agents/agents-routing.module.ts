import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GunsComponent} from '../guns/guns.component';
import {HomeComponent} from '../home/home.component';
import {MapsComponent} from '../maps/maps.component';
import {AddComponent} from './add/add.component';
import {AgentsComponent} from './agents.component';
import {DetailComponent} from './detail/detail.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [{path: '', component: AgentsComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'detail', component: DetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule {
}
