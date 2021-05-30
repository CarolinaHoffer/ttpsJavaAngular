import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCrearReservaComponent } from './dialog-crear-reserva.component';

describe('DialogCrearReservaComponent', () => {
  let component: DialogCrearReservaComponent;
  let fixture: ComponentFixture<DialogCrearReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCrearReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCrearReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
