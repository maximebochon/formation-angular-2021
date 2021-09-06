import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorByTextComponent } from './color-by-text.component';

describe('ColorByTextComponent', () => {
  let component: ColorByTextComponent;
  let fixture: ComponentFixture<ColorByTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorByTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorByTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
