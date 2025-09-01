import { Component, EventEmitter, Output } from '@angular/core';
import { Tarefa } from '../../model/tarefa';
import { AdicionaTarefa } from '../adiciona-tarefa/adiciona-tarefa';
import { ExibeTarefa } from "../exibe-tarefa/exibe-tarefa";


@Component({
  selector: 'app-gerencia-tarefa',
  standalone: true,
  imports: [AdicionaTarefa, ExibeTarefa],
  templateUrl: './gerencia-tarefa.html',
  styleUrl: './gerencia-tarefa.scss',
})
export class GerenciaTarefa {

  adicaoTarefas: Tarefa[] = [];


  adicionaTarefa(event: Tarefa){
    this.adicaoTarefas.push({...event});
  }

}
