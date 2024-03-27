import { Component } from '@angular/core';

// Material imports
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
