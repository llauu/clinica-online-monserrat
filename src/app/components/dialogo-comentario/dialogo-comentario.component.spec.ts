import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoComentarioComponent } from './dialogo-comentario.component';

describe('DialogoComentarioComponent', () => {
  let component: DialogoComentarioComponent;
  let fixture: ComponentFixture<DialogoComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoComentarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogoComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
