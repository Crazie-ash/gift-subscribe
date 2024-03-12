import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduButtonComponent } from './core/edu-button/edu-button.component';


@NgModule({
  declarations: [
    EduButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    EduButtonComponent
  ]
})
export class CommonComponentModule { }
