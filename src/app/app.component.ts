import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HomeComponent, ResumeComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  page: string;

  constructor () {
    this.page = "home";
  }

  Navigate(page: string) {
    this.page = page;
  }
}