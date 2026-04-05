import { Component } from '@angular/core';

@Component({
  selector: 'app-promotions',
  imports: [],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css'
})
export class PromotionsComponent {
  activePromoIndex: number = 0;

  setActivePromo(index: number): void {
    this.activePromoIndex = index;
  }
}
