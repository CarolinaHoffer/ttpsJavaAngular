import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrofoodtruckComponent } from './registrofoodtruck.component';

describe('RegistrofoodtruckComponent', () => {
  let component: RegistrofoodtruckComponent;
  let fixture: ComponentFixture<RegistrofoodtruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrofoodtruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrofoodtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
