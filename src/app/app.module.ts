import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { AgentsChildComponent } from './modules/agents/agents-child/agents-child.component';
import { HomeComponent } from './modules/home/home.component';
import { AddComponent } from './actions/add/add.component';
import { EditComponent } from './actions/edit/edit.component';
import { SearchComponent } from './actions/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './actions/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
