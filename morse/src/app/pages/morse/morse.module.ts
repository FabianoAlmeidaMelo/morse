import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MorsePageRoutingModule } from './morse-routing.module';

import { MorsePage } from './morse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MorsePageRoutingModule
  ],
  declarations: [MorsePage]
})
export class MorsePageModule {}
