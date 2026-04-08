import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PriceCalculator } from './price-calculator';
import { fetchPrice, fetchTaxRate } from './fake-api';

@Component({
  selector: 'app-price-calculator-page',
  imports: [FormsModule, PriceCalculator],
  templateUrl: './price-calculator-page.html',
  styleUrl: './price-calculator-page.css',
})
export class PriceCalculatorPage {
  price: number | undefined;
  quantity = 3;
  taxRate: number | undefined;

  constructor() {
    fetchPrice().then((value) => (this.price = value));
    fetchTaxRate().then((value) => (this.taxRate = value));
  }
}
