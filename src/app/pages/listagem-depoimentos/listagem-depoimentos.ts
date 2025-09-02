import { Component, OnInit } from '@angular/core';
import { Depoimento } from '../../model/depoimento';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-listagem-depoimentos',
  imports: [],
  templateUrl: './listagem-depoimentos.html',
  styleUrl: './listagem-depoimentos.scss'
})
export class ListagemDepoimentos implements OnInit  {

  constructor(private dataService: DataService) { }

  depoimentos: Depoimento[] = [];

  ngOnInit(): void {
    this.criarDepoimento();
  }

  criarDepoimento(): void {
    this.dataService.getDepoimentos().subscribe({
      next: (data) => {
        this.depoimentos = data as Depoimento[]
      },
      error: (erro) => {
        console.log("Não foi possivel carregar o depoimento", erro);
      },
      complete: () => {
        console.log("Requisição concluida")
      }
    })
  }


}
