import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsChildComponent } from './agents/agents-child/agents-child.component';
import { AgentsComponent } from './agents/agents.component';
import { GunsComponent } from './guns/guns.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{path:'test',component:TestComponent},
                        {path:'agents',component:AgentsComponent},
                        {path:'maps',component:MapsComponent},
                        {path:'guns',component:GunsComponent},
                        {path:'home',component:HomeComponent},
                        {path:'agents/agents-guide',component:AgentsChildComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
