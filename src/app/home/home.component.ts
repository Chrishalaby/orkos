import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BuyTicketComponent } from '../buy-ticket/buy-ticket.component';
import { InfodialogueComponent } from './infodialogue/infodialogue.component';

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  inventoryStatus: string;
  infoTheme: string;
  infoDate: string;
  food: boolean;
  drinks: boolean;
  parking: boolean;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  eventgrp: any;

  pi = 'pi pi-star';
  changeStar() {
    if (this.pi === 'pi pi-star') this.pi = 'pi pi-star-fill';
    else this.pi = 'pi pi-star';
  }

  products: Product[] = [];
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
      showIndicators: false,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
      showIndicators: false,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
      showIndicators: false,
    },
  ];

  constructor(
    private readonly httpClient: HttpClient,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.httpClient
      .get<any>('assets/products.json')
      .pipe(
        tap((products: any) => {
          this.products = products.data;
        })
      )
      .subscribe();
    this.httpClient
      .get(`${environment.apiUrl}/events`)
      .pipe(
        tap((events) => {
          this.eventgrp = events;
          console.log(this.eventgrp);
        })
      )
      .subscribe();
  }

  showModalDialog(product: Product) {
    this.dialogService.open(InfodialogueComponent, {
      data: {
        ...product,
      },
      header: 'Information',
      baseZIndex: 10000,
    });
  }

  getEvents() {
    this.httpClient
      .get(`${environment.apiUrl}/events`)
      .pipe(
        tap((events) => {
          this.eventgrp = events;
        })
      )
      .subscribe();
  }

  buyTicket(product: Product) {
    this.dialogService.open(BuyTicketComponent, {
      data: product,
      header: 'Buy Ticket',
    });
  }
}
