import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthRepository } from '../auth/shared/auth.repository';

@Component({
  selector: 'app-bought-tickets',
  templateUrl: './bought-tickets.component.html',
  styleUrls: ['./bought-tickets.component.scss'],
})
export class BoughtTicketsComponent implements OnInit {
  boughtTickets: any[] = [];

  constructor(
    private readonly httpClient: HttpClient,
    private readonly authRepository: AuthRepository
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get<any[]>(
        `${environment.apiUrl}/events/user/${this.authRepository.personMail}/tickets`
      )
      .subscribe((events: Event[]) => {
        this.boughtTickets = events;
      });
  }
}
