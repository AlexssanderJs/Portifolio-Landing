import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaContador } from './pagina-contador';

describe('PaginaContador', () => {
  let component: PaginaContador;
  let fixture: ComponentFixture<PaginaContador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaContador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaContador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
