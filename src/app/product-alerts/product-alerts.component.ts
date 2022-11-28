import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../productse';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  abixa() {
    window.alert('Ahal bezain laster abixatuko zaituugu ' + this.product.name + '-ren berriekin')
  }
}
