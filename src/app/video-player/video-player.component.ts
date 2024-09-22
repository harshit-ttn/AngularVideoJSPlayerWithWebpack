import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import videojs from 'video.js';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef;
  player: any;
  @Input() index: any;

  ngOnInit(): void {
    this.player = videojs(this.videoPlayer.nativeElement, {
      controls: false,
      autoplay: true,
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
