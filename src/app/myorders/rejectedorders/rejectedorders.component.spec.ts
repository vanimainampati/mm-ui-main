import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedordersComponent } from './rejectedorders.component';

describe('RejectedordersComponent', () => {
  let component: RejectedordersComponent;
  let fixture: ComponentFixture<RejectedordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
