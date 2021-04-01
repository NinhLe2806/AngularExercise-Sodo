import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { TestComponent } from './test/test.component';
import { AgentsComponent } from './agents/agents.component';
import { MapsComponent } from './maps/maps.component';
import { GunsComponent } from './guns/guns.component';
import { EditComponent } from './agents/edit/edit.component';
import { AddComponent } from './agents/add/add.component';
import { FormComponent } from './agents/form/form.component';
import { DetailComponent } from './agents/detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AgentsComponent
    ,MapsComponent,GunsComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }
