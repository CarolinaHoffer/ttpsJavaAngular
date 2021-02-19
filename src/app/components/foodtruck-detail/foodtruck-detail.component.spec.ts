import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtruckDetailComponent } from './foodtruck-detail.component';

describe('FoodtruckDetailComponent', () => {
  let component: FoodtruckDetailComponent;
  let fixture: ComponentFixture<FoodtruckDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodtruckDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodtruckDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
