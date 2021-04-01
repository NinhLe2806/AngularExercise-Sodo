import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from 'src/app/modules/agents//add/add.component';
import { EditComponent } from 'src/app/modules/agents//edit/edit.component';
import { DetailComponent } from 'src/app/modules/agents//detail/detail.component';
import { FormComponent } from 'src/app/modules/agents/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsComponent } from './agents.component';



@NgModule({
  declarations: [FormComponent,EditComponent,AddComponent,DetailComponent,AgentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }
