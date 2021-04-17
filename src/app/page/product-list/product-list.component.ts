import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  /* create */
  newProduct: Product = new Product();

  /* table */
  productList$: Observable<Product[]> = this.productService.getAll();

  constructor(
    private productService: ProductService,    /* table */
  ) { }

  ngOnInit(): void {
  }

  /* delete */
  onDelete(product: Product): void {
    this.productService.delProduct(product).subscribe(
      () => {
         this.productList$ = this.productService.getAll();
       }
    );
  }

  /* create */
  onCreate(product: Product): void {
    this.productService.createProduct(product).subscribe(
      () => window.location.reload()                            /* oldal frissitese */
    );
  }
}


