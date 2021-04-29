import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterableContactListComponent } from './filterable-contact-list.component';

describe('FilterableContactListComponent', () => {
  let component: FilterableContactListComponent;
  let fixture: ComponentFixture<FilterableContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterableContactListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterableContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
