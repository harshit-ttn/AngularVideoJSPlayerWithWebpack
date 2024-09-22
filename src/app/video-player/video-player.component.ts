import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  standalone: true, // Ensure it's standalone
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef;
  player: any;

  ngOnInit(): void {
    this.player = videojs(this.videoPlayer.nativeElement, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      sources: [
        {
          src: 'https://example.com/video.m3u8',
          type: 'application/x-mpegURL',
        },
      ],
    });
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }
}
