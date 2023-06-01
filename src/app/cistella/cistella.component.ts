import { Component } from '@angular/core';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent {
  items = this.s.getItems();
  totalCompra = 0;

  constructor(private s: ServiceService) {
  }

  esborrar(index:number){
    this.s.esborrarItem(index);
    window.alert((`Article eliminat de la cistella`))
  }

  comprarItem(index:number){
    this.s.esborrarItem(index);
    window.alert((`Gràcies per la teva compra!`))
  }

  public clearAll() {
    this.s.buidarCistella()
    window.alert((`Cistella buida`))
  }
  public GraciesPerComprar(){
    this.s.buidarCistella()
    window.alert((`Gràcies per la teva compra!`))
  }

  ValidateInput(event: any, i: number) {
    const quantity = + event.target.value;
    if (quantity < 1){
      event.target.value = this.items[i].quantity;
      return;
    }
    this.QuantityUpdated(quantity, i)
    this.calcularTotal()
  }
  private QuantityUpdated (quantity: number, i: number){
    this.items[i].quantity = quantity;
  }
  public calcularTotal(): number{
    let total: number = 0;
    for (let item of this.items){
      total += (item.quantity * item.preu)
    }
    this.totalCompra = total;
    return total;
  }
}
