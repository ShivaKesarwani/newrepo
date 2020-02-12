import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticContentTypesComponent } from './static-content-types.component';

describe('StaticContentTypesComponent', () => {
  let component: StaticContentTypesComponent;
  let fixture: ComponentFixture<StaticContentTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticContentTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticContentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
