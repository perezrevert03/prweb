import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [CursosComponent]
})
export class CursosModule { }
