import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedesComponent } from './redes.component';
import { RedesRoutingModule } from './redes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RedesRoutingModule
  ],
  declarations: [RedesComponent]
})
export class RedesModule { }
