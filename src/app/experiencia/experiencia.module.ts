import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienciaComponent } from './experiencia.component';
import { ExperienciaRoutingModule } from './experiencia-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExperienciaRoutingModule
  ],
  declarations: [ExperienciaComponent]
})
export class ExperienciaModule { }
