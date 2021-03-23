import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIsNotFoodtruckerComponent } from './dialog-is-not-foodtrucker.component';

describe('DialogIsNotFoodtruckerComponent', () => {
  let component: DialogIsNotFoodtruckerComponent;
  let fixture: ComponentFixture<DialogIsNotFoodtruckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogIsNotFoodtruckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogIsNotFoodtruckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
