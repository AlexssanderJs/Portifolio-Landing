import { Component, Input } from '@angular/core';
import { Contador } from "../../component/contador/contador";

@Component({
  selector: 'app-pagina-contador',
  imports: [Contador],
  templateUrl: './pagina-contador.html',
  styleUrl: './pagina-contador.scss'
})
export class PaginaContador {

  valor: number = 0

  atualizaValor(event: number){
    this.valor = event;
  }

}
