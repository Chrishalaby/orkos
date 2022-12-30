import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-low-bar',
  templateUrl: './low-bar.component.html',
  styleUrls: ['./low-bar.component.scss']
})
export class LowBarComponent implements OnInit {
  visibleSidebar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
