import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduButtonComponent } from './core/edu-button/edu-button.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    EduButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports:[
    EduButtonComponent
  ]
})
export class CommonComponentModule { }
