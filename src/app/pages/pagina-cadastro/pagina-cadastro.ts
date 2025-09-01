import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { Formulario } from '../../component/formulario/formulario';
import { Usuario } from '../../model/usuario';
import { Botao } from "../../component/botao/botao";

@Component({
  selector: 'app-pagina-cadastro',
  imports: [Header, Formulario, Botao],
  templateUrl: './pagina-cadastro.html',
  styleUrl: './pagina-cadastro.scss'
})
export class PaginaCadastro {
  ultimoUsuario: Usuario | null = null;

  processarDados(usuario: Usuario): void {
    console.log('Dados recebidos: ', usuario);
  }

  limparDados(): void {
    this.ultimoUsuario = null;
    console.log('Dados limpos');
  }

}
