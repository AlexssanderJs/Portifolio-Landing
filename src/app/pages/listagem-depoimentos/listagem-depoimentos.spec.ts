import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDepoimentos } from './listagem-depoimentos';

describe('ListagemDepoimentos', () => {
  let component: ListagemDepoimentos;
  let fixture: ComponentFixture<ListagemDepoimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemDepoimentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemDepoimentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
