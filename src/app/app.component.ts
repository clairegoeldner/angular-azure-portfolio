import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './app.component.html'
})
export class AppComponent {
}