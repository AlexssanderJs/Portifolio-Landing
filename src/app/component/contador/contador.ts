import { Component, EventEmitter, Output, output } from '@angular/core';
import { Botao } from '../botao/botao';

@Component({
  selector: 'app-contador',
  imports: [Botao],
  templateUrl: './contador.html',
  styleUrl: './contador.scss'
})
export class Contador {

  novoValor: number = 0;

  @Output() valorAlterado = new EventEmitter<number>();

  incrementar() {
    this.novoValor++;
    this.valorAlterado.emit(this.novoValor);
  }

  decrementar(){
    this.novoValor--;
    this.valorAlterado.emit(this.novoValor)
  }

}
