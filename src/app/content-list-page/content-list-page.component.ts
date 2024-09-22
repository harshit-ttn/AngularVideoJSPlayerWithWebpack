import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-list-page',
  templateUrl: './content-list-page.component.html',
  styleUrls: ['./content-list-page.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ContentListPageComponent {
  contentType: string;
  contentList: string[];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.contentType = this.route.snapshot.paramMap.get('type') || '';
    this.contentList = this.getContentList(this.contentType);
  }

  getContentList(type: string): string[] {
    if (type === 'drm') return ['DRM Video 1', 'DRM Video 2'];
    if (type === 'non-drm') return ['Non-DRM Video 1', 'Non-DRM Video 2'];
    if (type === 'live') return ['Live Stream 1', 'Live Stream 2'];
    return [];
  }

  playContent(content: string) {
    this.router.navigate(['/player', content]);
  }
}
