import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { CommonComponentModule } from './common/common.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NavbarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CommonComponentModule,
    IonicModule
  ],
  exports: [NavbarComponent, HeaderComponent, FooterComponent]
})
export class SharedModule { }
