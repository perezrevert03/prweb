import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienciaComponent } from './experiencia.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ExperienciaComponent,
    data: {
      title: 'Experiencia'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ExperienciaRoutingModule { }
