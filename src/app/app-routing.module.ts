import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './layouts/header/header.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/agents/agents.module').then(mod => mod.AgentsModule),
  },
  {
    path: '',
    children: [
      {
        path: 'agents',
        loadChildren: () => import('./modules/agents/agents.module').then(mod => mod.AgentsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
