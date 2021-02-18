import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFoodtruckComponent } from './new-foodtruck.component';

describe('NewFoodtruckComponent', () => {
  let component: NewFoodtruckComponent;
  let fixture: ComponentFixture<NewFoodtruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFoodtruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFoodtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
