import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Product {
  image: string,
  name: string,
  price: number,
  inventoryStatus: string,
  description: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  products: Product[] = [];
  responsiveOptions = [{
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3,
    showIndicators: false
},
{
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2,
    showIndicators: false
},
{
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
    showIndicators: false
}];
  displayModal: boolean | undefined;

  constructor(private readonly httpClient: HttpClient, private router: Router) {
  }

  ngOnInit() {
      this.httpClient.get<any>('assets/products.json').pipe(tap((products: any)=> {this.products = products.data;})).subscribe();
  }

  showModalDialog() {
    this.displayModal = true;
  }
}
