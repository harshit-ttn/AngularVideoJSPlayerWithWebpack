import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSelectionPageComponent } from './content-selection-page.component';

describe('ContentSelectionPageComponent', () => {
  let component: ContentSelectionPageComponent;
  let fixture: ComponentFixture<ContentSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSelectionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
