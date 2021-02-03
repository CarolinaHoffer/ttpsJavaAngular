import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInicioComponent } from './content-inicio.component';

describe('ContentInicioComponent', () => {
  let component: ContentInicioComponent;
  let fixture: ComponentFixture<ContentInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
