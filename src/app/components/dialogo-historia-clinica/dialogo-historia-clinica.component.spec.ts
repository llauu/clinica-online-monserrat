import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoHistoriaClinicaComponent } from './dialogo-historia-clinica.component';

describe('DialogoHistoriaClinicaComponent', () => {
  let component: DialogoHistoriaClinicaComponent;
  let fixture: ComponentFixture<DialogoHistoriaClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoHistoriaClinicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogoHistoriaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
