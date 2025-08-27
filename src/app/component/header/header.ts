import { Component } from '@angular/core';
import { Link } from '../../model/link';
import { CardImagem } from '../card-imagem/card-imagem';
import { Tarefa } from '../../model/tarefa';

@Component({
  selector: 'app-header',
  imports: [CardImagem],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  titulo: string = "Meu Portifólio";

  link1: Link = {nome: "Home", url: "/"};
  link2: Link = {nome: "Sobre", url: "/sobre"};
  
  links: any = [this.link1, this.link2];

  usuarioLogado: boolean = false;

  tarefa: Tarefa = {
    titulo: "tarefa 1",
    descricao: "descrição da tarefa",
    prioridade: 1
  };

}
