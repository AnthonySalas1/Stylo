import { Component } from '@angular/core';
import { dtoTrends } from '../../interfaces/dtos';
import { TRENDS_DATA } from '../../data/mock-data';

@Component({
  selector: 'app-trends',
  imports: [],
  templateUrl: './trends.component.html',
  styleUrl: './trends.component.css'
})
export class TrendsComponent {

  // Tabla Maestra 'Trends' (Centralizada en mock-data.ts)
  trendsTable: dtoTrends[] = TRENDS_DATA;

  // Agrupación dinámica por 'codTipo' para renderizar los 4 banners
  getCategoryName(codTipo: string): string {
    switch(codTipo) {
      case '001': return 'Trends 2026';
      case '002': return 'Insta Trends';
      case '003': return 'TikTok Trends';
      case '004': return 'Famous Trends';
      default: return 'Trending Style';
    }
  }
}
