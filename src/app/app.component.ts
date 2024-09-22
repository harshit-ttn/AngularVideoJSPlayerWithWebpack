import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule], // Import RouterModule to handle routing in the template
})
export class AppComponent {
  title = 'AngularJS VideoPlayer';
}
