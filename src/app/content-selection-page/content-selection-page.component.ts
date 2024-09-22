import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-selection-page',
  templateUrl: './content-selection-page.component.html',
  styleUrls: ['./content-selection-page.component.scss'],
  standalone: true,
})
export class ContentSelectionPageComponent {
  constructor(private router: Router) {}

  navigateToContentList(contentType: string) {
    this.router.navigate(['/content-list', contentType]);
  }
}
