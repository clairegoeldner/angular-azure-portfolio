import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  rateMe: number;
  rateSite: number;
  comments: string;
  company: string;
  fName: string;
  lName: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;

  results: string;

  constructor () {
    this.rateMe = 0;
    this.rateSite = 0;
    this.comments = "";
    this.company = "";
    this.fName = "";
    this.lName = "";
    this.city = "";
    this.state = "";
    this.zip = "";
    this.phone = "";
    this.email = "";

    this.results = "";
  }

  Submit() {
    this.results = `${this.fName} ${this.lName}, thank you for submitting a contact request.`;
  }
}
