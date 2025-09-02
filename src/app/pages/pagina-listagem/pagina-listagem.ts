import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Depoimento } from '../../model/depoimento';

@Component({
  selector: 'app-pagina-listagem',
  imports: [],
  templateUrl: './pagina-listagem.html',
  styleUrl: './pagina-listagem.scss'
})
export class PaginaListagem implements OnInit {

  constructor(private dataService: DataService) { }

  usuarios: any[] = [];

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.dataService.getUsuarios().subscribe({
      next: (data) =>{
         this.usuarios.push(data);
      },
      error: (erro) => {
        console.error("Erro ao carregar usuarios", erro);
      },
      complete: () => {
        console.log("Requisição concluída");
      } 
    })
  }


}
