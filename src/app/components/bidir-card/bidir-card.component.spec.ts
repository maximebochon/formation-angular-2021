import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidirCardComponent } from './bidir-card.component';

describe('BidirCardComponent', () => {
  let component: BidirCardComponent;
  let fixture: ComponentFixture<BidirCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidirCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidirCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
