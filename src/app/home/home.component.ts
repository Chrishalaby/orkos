import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DialogService } from 'primeng/dynamicdialog';
import { InfodialogueComponent } from './infodialogue/infodialogue.component';

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
}
