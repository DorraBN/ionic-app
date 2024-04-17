import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurCategoryPage } from './vendeur-category.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurCategoryPageRoutingModule {}
