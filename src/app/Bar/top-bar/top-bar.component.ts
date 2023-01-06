import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';

export interface Event {
  image: string,
  name: string,
  price: number,
  inventoryStatus: string,
  description: string,
}
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  visibleSidebar: boolean = false;

  searchFormGroup!: FormGroup;
  events: Event[] = []
  filteredEvents: Event[] = []
  constructor(private readonly formBuilder: FormBuilder, private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>('assets/products.json').pipe(tap((events: any) => {this.events = events.data;})).subscribe()
    this.searchFormGroup = this.formBuilder.group({
      'search': ''
    });

    this.searchFormGroup.get('search')?.valueChanges.pipe(
      tap((value: string) => {
        this.filterResults(value);
      })
    ).subscribe();
  }

  filterResults(searchTerm: string): void {
    this.filteredEvents = this.events.filter(events => events.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
