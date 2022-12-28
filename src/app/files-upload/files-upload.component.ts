import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Message,MessageService} from 'primeng/api';

export interface Event {
  name: string;
  price: number;
  ticketAmount: number;
  location: string;
  image: File;
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
  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; showIndicators: boolean; }[];


  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
    this.eventForm = this.formBuilder.group({
      name: '',
      price: '',
      ticketAmount: '',
      location: '',
    });
    this.eventForm.valueChanges.subscribe((event) => {
      this.events = [event]
    });
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 1,
          showIndicators: false
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1,
          showIndicators: false
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1,
          showIndicators: false
      }
  ];
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

}