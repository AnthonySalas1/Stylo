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
  get category001() { return this.trendsTable.filter(t => t.codTipo === '001'); }
  get category002() { return this.trendsTable.filter(t => t.codTipo === '002'); }
  get category003() { return this.trendsTable.filter(t => t.codTipo === '003'); }
  get category004() { return this.trendsTable.filter(t => t.codTipo === '004'); }
}
