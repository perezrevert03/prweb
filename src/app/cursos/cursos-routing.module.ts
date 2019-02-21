import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CursosComponent,
    data: {
      title: 'Cursos'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
