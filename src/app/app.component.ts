import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { TrendsComponent } from './components/trends/trends.component';
import { ContactComponent } from './components/contact/contact.component';
import { HOME_BANNERS } from './data/mock-data';
import { dtoHomeBanner } from './interfaces/dtos';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet, 
    ServicesComponent,
    PromotionsComponent,
    TrendsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AJ Golden Glow';
  isTrendsModalOpen = false;
  activeSection: string = 'inicio'; // Estado del tab activo

  backgroundGifs = [
    'backgrounds/ondasLargasCabelloLargo.gif',
    'backgrounds/OndasRubio.gif',
    'backgrounds/cabelloNegroMedio.gif'
  ];
  currentBgIndex = 0;

  homeBanners: dtoHomeBanner[] = HOME_BANNERS;

  ngOnInit() {
    // Cambiar el fondo cada 7 segundos
    setInterval(() => {
      this.currentBgIndex = (this.currentBgIndex + 1) % this.backgroundGifs.length;
    }, 7000);
  }

  toggleTrendsModal() {
    this.isTrendsModalOpen = !this.isTrendsModalOpen;
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}

