import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

// Material imports
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatRadioModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
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
  phone$: Subject<string>;
  phoneError: string = "";
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
    this.phone$ = new Subject<string>();
    this.email = "";

    this.results = "";
  }

  ngOnInit(): void {
    this.phone$.subscribe(() => {
      console.log(this.phone);

      if (!/^(\()?\d{3}(\) |-)\d{3}-\d{4}$/.test(this.phone)) {
        this.phoneError = "You have incorrect phone information.";
      } else {
        this.phoneError = "";
      }
    });
  }

  ChangePhone(event: any): void {
    this.phone$.next(event.target.value);
  }

  Submit() {
    this.results = `${this.fName} ${this.lName}, thank you for submitting a contact request.`;
  }
}
