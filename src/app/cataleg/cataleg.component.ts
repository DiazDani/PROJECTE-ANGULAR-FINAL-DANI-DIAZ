import { Component } from '@angular/core';
import {Producte,productes} from "../productes";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css']
})
export class CatalegComponent {
  productes=productes;
  productesFiltrats: Producte[] = this.productes;
  categoria:string= "tots"


  constructor(private s: ServiceService) {
    this.categoria = 'todos';
  }
  addToCart(product: Producte){
    this.s.afegirCistella(product);
    window.alert((`${product.name} ha sigut afegit a la teva cistella.`))
  }
  filtrarPerCategoria(categoria: any) {
    // @ts-ignore
    this.categoria = event.target.value;
    this.productesFiltrats = this.productes.filter(producte => producte.type === this.categoria || this.categoria === 'todos');

  }

  productosFiltrados() {
    if (this.categoria === 'todos') {
      return this.productes;
    } else {
      return this.productes.filter(
        (producte) => producte.type === this.categoria
      );
    }
  }
}
