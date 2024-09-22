import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-block',
  templateUrl: './widget-block.component.html',
  styleUrls: ['./widget-block.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class WidgetBlockComponent {
  @Input() content: any;
  @Output() play: EventEmitter<any> = new EventEmitter();

  onPlay() {
    this.play.emit(this.content);
  }
}
