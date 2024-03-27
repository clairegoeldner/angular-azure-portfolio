import { Component } from '@angular/core';

// Material imports
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './resume.component.html'
})
export class ResumeComponent {}
