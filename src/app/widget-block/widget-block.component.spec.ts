import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBlockComponent } from './widget-block.component';

describe('WidgetBlockComponent', () => {
  let component: WidgetBlockComponent;
  let fixture: ComponentFixture<WidgetBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
