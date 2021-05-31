import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasTableComponent } from './reservas-table.component';

describe('ReservasTableComponent', () => {
  let component: ReservasTableComponent;
  let fixture: ComponentFixture<ReservasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
