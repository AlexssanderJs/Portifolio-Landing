import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.html',
  styleUrl: './botao.scss'
})
export class Botao {

  @Input() texto: string = "Buscar";
  @Output() clique = new EventEmitter<void>();

  aoClicar(): void {
    this.clique.emit();
  }

}
