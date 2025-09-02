import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  criarUsuario(usuario: any){
    return this.http.post('https://jsonplaceholder.typicode.com/users', usuario);
  }

  getDepoimentos(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  criarDepoimento(depoimento: any){
    return this.http.get('https://jsonplaceholder.typicode.com/posts', depoimento);
  }

}
