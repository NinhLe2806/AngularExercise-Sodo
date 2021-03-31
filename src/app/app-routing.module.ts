import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './actions/add/add.component';
import { EditComponent } from './actions/edit/edit.component';
import { SearchComponent } from './actions/search/search.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DefaultModule } from './layouts/default/default.module';
import { AgentsChildComponent } from './modules/agents/agents-child/agents-child.component';
import { AgentsComponent } from './modules/agents/agents.component';
import { GunsComponent } from './modules/guns/guns.component';
import { HomeComponent } from './modules/home/home.component';
import { MapsComponent } from './modules/maps/maps.component';

const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children: [{ 
    path:'',
    loadChildren: () =>import('./modules/modules.module').then(mod=>mod.ModulesModule)
  }
  ,{
    path:'actions',
    loadChildren: () =>import('./actions/actions.module').then(mod=>mod.ActionsModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
