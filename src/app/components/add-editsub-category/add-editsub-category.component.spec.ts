import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditsubCategoryComponent } from './add-editsub-category.component';

describe('AddEditsubCategoryComponent', () => {
  let component: AddEditsubCategoryComponent;
  let fixture: ComponentFixture<AddEditsubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditsubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditsubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
