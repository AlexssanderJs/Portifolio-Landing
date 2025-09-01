import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Tarefa } from '../../model/tarefa';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-adiciona-tarefa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adiciona-tarefa.html',
  styleUrl: './adiciona-tarefa.scss',
})
export class AdicionaTarefa {

  novaTarefa: Tarefa = {
    titulo: '',
    descricao: '',
    prioridade: 0
  }

  @Output() criaTarefa = new EventEmitter<Tarefa>();

  submit(){
    this.criaTarefa.emit(this.novaTarefa);
  }
}
