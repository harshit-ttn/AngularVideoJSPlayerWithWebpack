import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WidgetBlockComponent } from '../widget-block/widget-block.component';
import { drmDataList } from '../../utils/drmData';
import { nonDrmDataList } from '../../utils/nonDrmData';
import { liveDataList } from '../../utils/liveData';

@Component({
  selector: 'app-content-list-page',
  templateUrl: './content-list-page.component.html',
  styleUrls: ['./content-list-page.component.scss'],
  standalone: true,
  imports: [CommonModule, WidgetBlockComponent],
})
export class ContentListPageComponent {
  contentType: string;
  contentList: any[];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.contentType = this.route.snapshot.paramMap.get('type') || '';
    this.contentList = this.getContentList(this.contentType);
  }

  getContentList(type: string): any[] {
    if (type === 'drm') return drmDataList;
    if (type === 'non-drm') return nonDrmDataList;
    if (type === 'live') return liveDataList;
    return [];
  }

  playContent(content: any) {
    this.router.navigate([
      '/player',
      content.content_name,
      content.index,
      this.contentType,
    ]);
  }
}
