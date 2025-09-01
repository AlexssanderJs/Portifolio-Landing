import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeTarefa } from './exibe-tarefa';

describe('ExibeTarefa', () => {
  let component: ExibeTarefa;
  let fixture: ComponentFixture<ExibeTarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibeTarefa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeTarefa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
