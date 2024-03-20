import { Component } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HomeComponent, ResumeComponent, ProjectsComponent, ContactComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './app.component.html'
})
export class AppComponent {
  page: string = "home";

  navigate(page: string) : void {
    this.page = page;
  }
}