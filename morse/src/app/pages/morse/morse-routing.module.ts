import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MorsePage } from './morse.page';

const routes: Routes = [
  {
    path: '',
    component: MorsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MorsePageRoutingModule {}
