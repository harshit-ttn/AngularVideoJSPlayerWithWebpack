import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListPageComponent } from './content-list-page.component';

describe('ContentListPageComponent', () => {
  let component: ContentListPageComponent;
  let fixture: ComponentFixture<ContentListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
