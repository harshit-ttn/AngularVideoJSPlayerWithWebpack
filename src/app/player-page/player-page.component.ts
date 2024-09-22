import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss'],
  standalone: true,
})
export class PlayerPageComponent {
  content: string;

  constructor(private route: ActivatedRoute) {
    this.content =
      this.route.snapshot.paramMap.get('content') || 'Unknown Content';
  }
}
