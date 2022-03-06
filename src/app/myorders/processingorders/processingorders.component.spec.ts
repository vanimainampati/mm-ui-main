import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingordersComponent } from './processingorders.component';

describe('ProcessingordersComponent', () => {
  let component: ProcessingordersComponent;
  let fixture: ComponentFixture<ProcessingordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
