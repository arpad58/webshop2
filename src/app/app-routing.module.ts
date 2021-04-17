import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditorComponent } from './page/product-editor/product-editor.component';
import { ProductListComponent } from './page/product-list/product-list.component';

const routes: Routes = [
  /* table */
  {
    path: '',
    component: ProductListComponent,
  },
  /* editor update */
  {
    path: 'product/:id',
    component: ProductEditorComponent,
  },
  /* table */
  {
    path: '**',
    component: ProductListComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
