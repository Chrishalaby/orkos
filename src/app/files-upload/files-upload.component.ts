import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Message,MessageService} from 'primeng/api';

export interface Event {
  name: string;
  price: number;
  ticketAmount: number;
  location: string;
  image: File;
  infoTheme: string;
  infoDate: string;
  food: boolean;
  drinks: boolean;
  parking: boolean;
}

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {
  events: Event[] = [];
  uploadedFiles: any[] = [];
  textValue: string | undefined;
  eventForm: FormGroup;
  image?: File;
  imageUrl: string | undefined;
  tickets = [
    {name: 'Limited'},
    {name: 'Available'},
    {name: 'Unavailable'}];
  displayModalFill: boolean | undefined;
  displayModalPrev: boolean | undefined;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
    this.eventForm = this.formBuilder.group({
      name: '',
      price: '',
      ticketAmount: '',
      location: '',
      infoTheme: '',
      infoDate: '',
      food: '',
      drinks: '',
      parking: '',
    });
    this.eventForm.valueChanges.subscribe((event) => {
      this.events = [event]
    });
  }

  onSelect(event: { files: (File | undefined)[]; }) {
    this.image = event.files[0];

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    if(this.image){
      reader.readAsDataURL(this.image);
    }
  }
  ngOnInit(): void {
  }
  showModalFill() {
    this.displayModalFill = true;
  }
  showModalPreview() {
    this.displayModalPrev = true;
  }
}
