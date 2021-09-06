import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidirComponent } from './bidir.component';

describe('BidirComponent', () => {
  let component: BidirComponent;
  let fixture: ComponentFixture<BidirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
