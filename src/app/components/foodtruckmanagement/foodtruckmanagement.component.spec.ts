import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtruckmanagementComponent } from './foodtruckmanagement.component';

describe('FoodtruckmanagementComponent', () => {
  let component: FoodtruckmanagementComponent;
  let fixture: ComponentFixture<FoodtruckmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodtruckmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodtruckmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
