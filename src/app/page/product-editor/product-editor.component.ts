import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { switchMap } from 'rxjs/operators';          /* editor update */
import { NgForm } from '@angular/forms';             /* editor update */

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  constructor(
    private productService: ProductService,   /* editor update */
    private activatedRoute: ActivatedRoute,   /* editor update */
    private router: Router                    /* editor update */
  ) { }

  ngOnInit(): void {
  }

  /* editor */
  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap(params => {
            return this.productService.get(Number(params.id));
    })
  );

  /* editor update */
  onSubmit(form: NgForm, product: Product): void {
    this.productService.updateProduct(product).subscribe(
      () => this.router.navigate(['/'])
    );
  }

}
