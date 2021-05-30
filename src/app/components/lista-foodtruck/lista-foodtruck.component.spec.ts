import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFoodtruckComponent } from './lista-foodtruck.component';

describe('ListaFoodtruckComponent', () => {
  let component: ListaFoodtruckComponent;
  let fixture: ComponentFixture<ListaFoodtruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFoodtruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFoodtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
