import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
})
export class HomePageComponent {
  constructor(private router: Router) {}

  navigateToGettingStarted() {
    this.router.navigate(['/content-selection']);
  }
}
