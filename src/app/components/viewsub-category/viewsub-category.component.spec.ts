import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubCategoryComponent } from './viewsub-category.component';

describe('ViewsubCategoryComponent', () => {
  let component: ViewsubCategoryComponent;
  let fixture: ComponentFixture<ViewsubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
