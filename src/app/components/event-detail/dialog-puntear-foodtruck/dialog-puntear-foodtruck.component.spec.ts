import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPuntearFoodtruckComponent } from './dialog-puntear-foodtruck.component';

describe('DialogPuntearFoodtruckComponent', () => {
  let component: DialogPuntearFoodtruckComponent;
  let fixture: ComponentFixture<DialogPuntearFoodtruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPuntearFoodtruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPuntearFoodtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
