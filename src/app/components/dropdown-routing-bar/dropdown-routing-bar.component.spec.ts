import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownRoutingBarComponent } from './dropdown-routing-bar.component';

describe('DropdownRoutingBarComponent', () => {
  let component: DropdownRoutingBarComponent;
  let fixture: ComponentFixture<DropdownRoutingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownRoutingBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownRoutingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
