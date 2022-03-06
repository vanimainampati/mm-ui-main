import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterdetailsComponent } from './requesterdetails.component';

describe('RequesterdetailsComponent', () => {
  let component: RequesterdetailsComponent;
  let fixture: ComponentFixture<RequesterdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequesterdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
