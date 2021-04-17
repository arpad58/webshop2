import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /* table */
  serverAddress: string = 'https://nettuts.hu/jms/arpad58/products';

  constructor(
    private http: HttpClient    /* table */
  ) { }

  /* table */
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.serverAddress}`);
  }

  /* delete */
  delProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.serverAddress}/${product.id}`);
  }

  /* editor */
  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.serverAddress}/${id}`);
  }

  /* editor update */
  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.serverAddress}/${product.id}`, product);
  }

  /* create */
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.serverAddress}`, product);
  }

}
