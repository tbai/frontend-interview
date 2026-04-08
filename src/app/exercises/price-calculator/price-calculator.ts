/**
 * Exercise: Price Calculator — Fix the Bug
 *
 * This component receives price, quantity, and taxRate as inputs
 * and should display the computed total.
 *
 * There is a bug: the total shows NaN on first render.
 * Find the bug and fix it.
 *
 * See EXERCISE.md for the full requirements.
 */

import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-price-calculator',
  imports: [CurrencyPipe],
  templateUrl: './price-calculator.html',
  styleUrl: './price-calculator.css',
})
export class PriceCalculator {
  total: number | undefined;

  private _price: number | undefined;
  private _quantity: number | undefined;
  private _taxRate: number | undefined;

  @Input()
  set price(value: number | undefined) {
    this._price = value;
    this.recalculate();
  }

  @Input()
  set quantity(value: number | undefined) {
    this._quantity = value;
    this.recalculate();
  }

  @Input()
  set taxRate(value: number | undefined) {
    this._taxRate = value;
    this.recalculate();
  }

  private recalculate(): void {
    this.total = this._price! * this._quantity! * (1 + this._taxRate!);
  }
}
