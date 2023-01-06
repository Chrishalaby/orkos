import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { tap } from 'rxjs';

export interface Event {
  image: string,
  name: string,
  price: number,
  inventoryStatus: string,
  description: string,
}
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchFormGroup!: FormGroup;
  events: Event[] = [];
  filteredEvents: Event[] = [];
  constructor(private readonly formBuilder: FormBuilder, private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<any>('assets/products.json').pipe(tap((events: any) => { this.events = events.data; this.filteredEvents = events.data })).subscribe();
    this.searchFormGroup = this.formBuilder.group({
      'search': ['']
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
