import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaTarefa } from './adiciona-tarefa';

describe('AdicionaTarefa', () => {
  let component: AdicionaTarefa;
  let fixture: ComponentFixture<AdicionaTarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionaTarefa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionaTarefa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
