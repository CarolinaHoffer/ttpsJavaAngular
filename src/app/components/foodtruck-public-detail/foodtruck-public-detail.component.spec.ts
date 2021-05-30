import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtruckPublicDetailComponent } from './foodtruck-public-detail.component';

describe('FoodtruckPublicDetailComponent', () => {
  let component: FoodtruckPublicDetailComponent;
  let fixture: ComponentFixture<FoodtruckPublicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodtruckPublicDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodtruckPublicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
