import { Injectable } from '@angular/core';
import {Producte} from "./productes";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  objectes: Producte[] = [];
  constructor() {

  }
  afegirCistella(producte: Producte){
    this.objectes.push(producte);
  }

  getItems(){
    return this.objectes;
  }

  esborrarItem(Index: any){
    this.objectes.splice(Index,1)
  }

  buidarCistella(){
    document.location.reload();
  }

}
