import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Products } from './products.interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private httpClient: HttpClient) {}
  urlApi: string = environment.api_url;
  searchResults: Products[] = [];
  private searchProductSubject = new Subject<Products[]>();
  public searchProduct$ = this.searchProductSubject.asObservable();

  getProducts(
    page: string = '1',
    sort: string = 'name',
    order: string = 'asc'
  ): Observable<Products[]> {
    const params = {
      params: { _page: page, _limit: '4', _sort: sort, _order: order },
    };
    return this.httpClient.get<Products[]>(`${this.urlApi}`, params);
  }

  searchProduct(name: string) {
    return this.httpClient
      .get<Products[]>(`${this.urlApi}?q=${name}&_limit=4`)
      .subscribe((data) => {
        this.searchResults = data;
        this.searchProductSubject.next(this.searchResults);
        console.log(this.searchResults);
      });
  }

  getFoundProducts() {
    return this.searchProduct$;
  }
}
