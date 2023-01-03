import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';

export interface Product {
  image: string,
  name: string,
  price: number,
  inventoryStatus: string,
  description: string,
}
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  visibleSidebar: boolean = false;
  searchControl = new FormControl('');
  searchResults: string[] = [];
  searchTerm: string |null| undefined


  products: Product[] = [];

  filterResults() {
    const searchTerm = this.searchTerm ?? '';
    return this.products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>('assets/products.json').pipe(tap((products: any) => { this.products = products.data; })).subscribe();
    this.searchControl.valueChanges.subscribe(value => {
      this.searchTerm = value;
    });
  }

}
