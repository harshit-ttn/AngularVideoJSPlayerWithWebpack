import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  OnDestroy,
} from '@angular/core';
import videojs from 'video.js';
import { CommonModule } from '@angular/common';
import { drmDataList } from '../../utils/drmData';
import { nonDrmDataList } from '../../utils/nonDrmData';
import { liveDataList } from '../../utils/liveData';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef;
  player: any;
  @Input() index: any;
  @Input() contentType: any;

  ngOnInit(): void {
    this.initializePlayer();
  }

  initializePlayer(): void {
    let videoSource: any = {
      src: '',
      type: 'application/x-mpegURL',
    };

    const drmOptions = {
      drm: {
        widevine: {
          licenseUrl: 'https://example.com/widevine-license-url',
        },
      },
    };

    if (this.contentType === 'drm') {
      videoSource.src = ``;
      videoSource.keySystems = drmOptions.drm; // Add DRM configuration
    } else if (this.contentType === 'non-drm') {
      videoSource.src = ``;
    } else if (this.contentType === 'live') {
      videoSource.src = ``;
    }

    this.player = videojs(this.videoPlayer.nativeElement, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      sources: [videoSource],
    });
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }
}
