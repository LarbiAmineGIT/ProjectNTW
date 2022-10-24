import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeletechangecomponentComponent } from './adddeletechangecomponent.component';

describe('AdddeletechangecomponentComponent', () => {
  let component: AdddeletechangecomponentComponent;
  let fixture: ComponentFixture<AdddeletechangecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddeletechangecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddeletechangecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
