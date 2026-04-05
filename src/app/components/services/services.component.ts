import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICIOS_DATA } from '../../data/mock-data';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = SERVICIOS_DATA;
}
