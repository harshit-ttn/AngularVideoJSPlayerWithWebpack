import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss'],
  standalone: true,
  imports: [CommonModule, VideoPlayerComponent],
})
export class PlayerPageComponent {
  content: string;
  index: any;

  constructor(private route: ActivatedRoute) {
    this.content =
      this.route.snapshot.paramMap.get('content') || 'Unknown Content';
    this.index = this.route.snapshot.paramMap.get('index') || 0;
  }
}
