import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { environment } from 'src/environments/environment';
import { AuthRepository } from '../auth/shared/auth.repository';
import { Product } from '../home/home.component';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.scss'],
})
export class BuyTicketComponent implements OnInit {
  ticket: Product = this.dynamicDialogConfig.data;
  constructor(
    private readonly dynamicDialogConfig: DynamicDialogConfig,
    private readonly ref: DynamicDialogRef,
    private readonly httpClient: HttpClient,
    private readonly authRepository: AuthRepository
  ) {}

  ngOnInit(): void {}

  submit() {
    console.log(
      'Attempting to buy ticket',
      this.ticket.id,
      this.authRepository.personMail
    );
    this.httpClient
      .post<void>(
        `${environment.apiUrl}/events/${this.ticket.id}/buy-ticket/${this.authRepository.personMail}`,
        {}
      )
      .subscribe();
    this.ref.close();
  }
}
