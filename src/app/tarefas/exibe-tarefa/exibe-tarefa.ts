import { Component, Input } from '@angular/core';
import { Tarefa } from '../../model/tarefa';

@Component({
  selector: 'app-exibe-tarefa',
  standalone: true,
  imports: [],
  templateUrl: './exibe-tarefa.html',
  styleUrl: './exibe-tarefa.scss',
})
export class ExibeTarefa {

  @Input() listaTarefa: Tarefa[] = [];
}
