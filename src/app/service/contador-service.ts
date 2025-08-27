import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private valor:number = 0;

  incrementar(): void 
  {
    this.valor++;
   }

  decrementar(): void 
  {
    this.valor--;
  }
  
}
