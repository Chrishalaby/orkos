import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Product } from '../home.component';

@Component({
  selector: 'app-infodialogue',
  templateUrl: './infodialogue.component.html',
  styleUrls: ['./infodialogue.component.scss']
})
export class InfodialogueComponent implements OnInit {
  product!: Product;

  constructor(
    private readonly dynamicDialogConfig: DynamicDialogConfig,
  ) { }

  ngOnInit(): void {
    this.product = this.dynamicDialogConfig.data;
  }
}
