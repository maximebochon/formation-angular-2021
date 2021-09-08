import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleImageComponent } from './cycle-image.component';

describe('CycleImageComponent', () => {
  let component: CycleImageComponent;
  let fixture: ComponentFixture<CycleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CycleImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
