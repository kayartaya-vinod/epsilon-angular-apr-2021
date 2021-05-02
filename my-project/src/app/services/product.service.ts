import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS_URL } from '../urls';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.http.get(PRODUCTS_URL);
  }

  public getOneProduct(id: string): Observable<any> {
    return this.http.get(PRODUCTS_URL + id);
  }

  public addNewProduct(product: any): Observable<any> {
    return this.http.post(PRODUCTS_URL, product);
  }

  public updateProduct(product: any): Observable<any> {
    return this.http.put(PRODUCTS_URL + product._id, product);
  }

  public deleteProduct(id: string): Observable<any> {
    return this.http.delete(PRODUCTS_URL + id);
  }
}
