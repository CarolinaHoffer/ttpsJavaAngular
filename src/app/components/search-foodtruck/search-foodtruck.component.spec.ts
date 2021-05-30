import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFoodtruckComponent } from './search-foodtruck.component';

describe('SearchFoodtruckComponent', () => {
  let component: SearchFoodtruckComponent;
  let fixture: ComponentFixture<SearchFoodtruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFoodtruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFoodtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
