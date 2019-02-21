import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedesComponent } from './redes.component';

const ROUTES: Routes = [
  {
    path: '',
    component: RedesComponent,
    data: {
      title: 'Redes'
    }
  }
]
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class RedesRoutingModule { }
