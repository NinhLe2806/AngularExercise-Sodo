import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { TestComponent } from './test/test.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentsChildComponent } from './agents/agents-child/agents-child.component';
import { MapsComponent } from './maps/maps.component';
import { GunsComponent } from './guns/guns.component';


@NgModule({
  declarations: [AgentsComponent,AgentsChildComponent,MapsComponent,GunsComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
