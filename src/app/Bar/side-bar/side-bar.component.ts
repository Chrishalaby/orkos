import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthFacade } from 'src/app/auth/store/auth.facade';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Output() close = new EventEmitter();
  isVisible: boolean = true;

  closeComponent() {
    this.close.emit();
  }
  constructor(public readonly authFacade: AuthFacade,) { }

  ngOnInit(): void {
  }

}
