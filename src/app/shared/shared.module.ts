import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { CommonComponentModule } from './common/common.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [NavbarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CommonComponentModule,
    MatToolbarModule,
    MatDividerModule
  ],
  exports: [NavbarComponent, HeaderComponent, FooterComponent]
})
export class SharedModule { }
