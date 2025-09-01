import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionaTarefa } from "./tarefas/adiciona-tarefa/adiciona-tarefa";
import { GerenciaTarefa } from "./tarefas/gerencia-tarefa/gerencia-tarefa";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portifolio-landing');
}
