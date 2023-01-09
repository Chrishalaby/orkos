import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-legalmain',
  templateUrl: './legalmain.component.html',
  styleUrls: ['./legalmain.component.scss']
})
export class LegalmainComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', routerLink:'/home'},
      {label: 'Terms & Services', routerLink: '/TermServ'},
      {label: 'Privacy Policy', routerLink: '/PrivPolicy'},
      {label: 'Refund Policy', routerLink: '/refund'},
      {label: 'Cookie Policy', routerLink: '/cookie'},
    ];
    this.activeItem = this.items[0];
  }

}
