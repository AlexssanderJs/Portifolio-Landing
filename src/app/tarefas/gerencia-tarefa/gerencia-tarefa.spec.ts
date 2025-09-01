import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaTarefa } from './gerencia-tarefa';

describe('GerenciaTarefa', () => {
  let component: GerenciaTarefa;
  let fixture: ComponentFixture<GerenciaTarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciaTarefa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciaTarefa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
