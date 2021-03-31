import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionsRoutingModule } from './actions-routing.module';
import { AddComponent } from './add/add.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [AddComponent,FormComponent,EditComponent],
  imports: [
    CommonModule,
    ActionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ActionsModule { }
