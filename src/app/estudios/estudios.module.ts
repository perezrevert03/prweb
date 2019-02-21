import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiosComponent } from './estudios.component';
import { EstudiosRoutingModule } from './estudios-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EstudiosRoutingModule
  ],
  declarations: [EstudiosComponent]
})
export class EstudiosModule { }
