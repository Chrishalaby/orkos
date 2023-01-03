import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { tap } from 'rxjs';

export interface Product {
  image: string,
  name: string,
  price: number,
  inventoryStatus: string,
  description: string,
}
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl('');
  searchResults: string[] = [];
  searchTerm: string |null| undefined


  products: Product[] = [];

  filterResults() {
    const searchTerm = this.searchTerm ?? '';
    return this.products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<any>('assets/products.json').pipe(tap((products: any) => { this.products = products.data; })).subscribe();
    this.searchControl.valueChanges.subscribe(value => {
      this.searchTerm = value;
    });
  }


}
