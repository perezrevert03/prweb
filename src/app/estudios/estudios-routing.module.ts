import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstudiosComponent } from './estudios.component';

const ROUTES: Routes = [
  {
    path: '',
    component: EstudiosComponent,
    data: {
      title: 'Estudios'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class EstudiosRoutingModule { }
