import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { Router, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapsComponent } from 'src/app/modules/maps/maps.component';
import { AgentsComponent } from 'src/app/modules/agents/agents.component';
import { GunsComponent } from 'src/app/modules/guns/guns.component';
import { AgentsChildComponent } from 'src/app/modules/agents/agents-child/agents-child.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AddComponent } from 'src/app/actions/add/add.component';
import { EditComponent } from 'src/app/actions/edit/edit.component';
import { SearchComponent } from 'src/app/actions/search/search.component';
import { TestComponent } from 'src/app/modules/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from 'src/app/actions/form/form.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,

    SearchComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
