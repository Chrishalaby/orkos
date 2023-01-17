import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DialogService } from 'primeng/dynamicdialog';
import { InfodialogueComponent } from './infodialogue/infodialogue.component';
import { environment } from 'src/environments/environment';

export interface Product {
  image: string,
  name: string,
  price: number,
  inventoryStatus: string,
  infoTheme: string,
  infoDate: string,
  food: boolean,
  drinks: boolean,
  parking: boolean,
  location: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  yes: any;
  eventgrp: any;

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

  constructor(private readonly httpClient: HttpClient, public dialogService: DialogService) {
  }

  ngOnInit() {
      this.httpClient.get<any>('assets/products.json').pipe(tap((products: any)=> {this.products = products.data;})).subscribe();
      this.httpClient.get(`${environment.apiUrl}/events`).pipe(tap((events) => {
        console.log(events)
        this.eventgrp = events
      })).subscribe();
  }

  showModalDialog(product: Product){
    this.dialogService.open(InfodialogueComponent, {
      data: {
        ...product
      },
      header: 'Information',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    })
  }
  getUser(){
    this.httpClient.get(`${environment.apiUrl}/users`).pipe(tap((users) => {
      console.log(users)
      this.yes = users
    })).subscribe();
  }

  // getEvents(){
  //   this.httpClient.get(`${environment.apiUrl}/events`).pipe(tap((events) => {
  //     console.log(events)
  //     this.eventgrp = events
  //   })).subscribe();
  // }
}
