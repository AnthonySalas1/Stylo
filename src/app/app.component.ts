import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { TrendsComponent } from './components/trends/trends.component';
import { ContactComponent } from './components/contact/contact.component';
import { HOME_BANNERS, TRENDS_DATA } from './data/mock-data';
import { dtoHomeBanner, dtoTrends } from './interfaces/dtos';

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
export class AppComponent implements AfterViewInit {
  @ViewChild('instaContainer') instaContainer!: ElementRef;
  
  title = 'AJ Golden Glow';
  isTrendsModalOpen = false;
  isSocialFanOpen = false;
  activeSection: string = 'inicio'; // Estado del tab activo

  backgroundGifs = [
    'backgrounds/ondasLargasCabelloLargo.gif',
    'backgrounds/OndasRubio.gif',
    'backgrounds/cabelloNegroMedio.gif'
  ];
  currentBgIndex = 0;

  homeBanners: dtoHomeBanner[] = HOME_BANNERS;
  trends: dtoTrends[] = TRENDS_DATA;

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

  toggleSocialFan() {
    this.isSocialFanOpen = !this.isSocialFanOpen;
  }

  ngAfterViewInit() {
    const slider = this.instaContainer.nativeElement;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    slider.addEventListener('mousedown', (e: MouseEvent) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Multiplicador de velocidad
      slider.scrollLeft = scrollLeft - walk;
    });
  }
}

