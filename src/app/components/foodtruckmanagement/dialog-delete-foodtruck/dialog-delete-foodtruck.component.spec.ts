import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteFoodtruckComponent } from './dialog-delete-foodtruck.component';

describe('DialogDeleteFoodtruckComponent', () => {
  let component: DialogDeleteFoodtruckComponent;
  let fixture: ComponentFixture<DialogDeleteFoodtruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteFoodtruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteFoodtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
