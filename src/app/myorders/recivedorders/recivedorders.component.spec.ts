import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivedordersComponent } from './recivedorders.component';

describe('RecivedordersComponent', () => {
  let component: RecivedordersComponent;
  let fixture: ComponentFixture<RecivedordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecivedordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecivedordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
