import { dtoTrends, dtoHomeBanner, dtoServices, dtoPromotions } from '../interfaces/dtos';

export const HOME_BANNERS: dtoHomeBanner[] = [
  {
    image: 'backgrounds/ondasLargasCabelloLargo.gif',
    title: 'Servicios',
    subTitle: 'Cortes que definen tu esencia',
    tag: 'TENDENCIA 2026'
  },
  {
    image: 'backgrounds/OndasRubio.gif',
    title: 'Promociones',
    subTitle: 'Balayages y tonos que iluminan',
    tag: 'MASTER COLOR'
  },
  {
    image: 'backgrounds/cabelloNegroMedio.gif',
    title: 'Tendencias',
    subTitle: 'Tratamientos hidratantes VIP',
    tag: 'CUIDADO CAPILAR'
  }
];

export const TRENDS_DATA: dtoTrends[] = [
  // Clase 001: Trends 2026
  { id: 1, codTipo: '001', tabTipo: 'TRND', title: 'Butterfly Cut', description: 'Capas largas y fluidas que dan movimiento.', imagen: 'trends/salon_balayage_demo.png' },
  { id: 2, codTipo: '001', tabTipo: 'TRND', title: 'Liquid Hair', description: 'Cabello ultra liso y brillante con efecto espejo.', imagen: 'trends/salon_balayage_demo.png' },

  // Clase 002: Trends Insta
  { id: 1, codTipo: '002', tabTipo: 'TRND', title: 'Old Money Blonde', description: 'Tonos miel para un look sofisticado.', imagen: 'trends/salon_balayage_demo.png' },
  { id: 2, codTipo: '002', tabTipo: 'TRND', title: 'Glass Skin Glow', description: 'Tratamientos de luminosidad extrema.', imagen: 'trends/salon_balayage_demo.png' },

  // Clase 003: Trends TikTok
  { id: 1, codTipo: '003', tabTipo: 'TRND', title: 'Cherry Cola Hair', description: 'Vibrante rojo oscuro con matices violetas.', imagen: 'trends/salon_balayage_demo.png' },
  { id: 2, codTipo: '003', tabTipo: 'TRND', title: 'Wolf Cut', description: 'El híbrido perfecto entre mullet y shag.', imagen: 'trends/salon_balayage_demo.png' },

  // Clase 004: Trends Famous
  { id: 1, codTipo: '004', tabTipo: 'TRND', title: 'Clean Girl Aesthetic', description: 'Peinados pulidos hacia atrás, impecables.', imagen: 'trends/salon_balayage_demo.png' },
  { id: 2, codTipo: '004', tabTipo: 'TRND', title: 'Expensive Brunette', description: 'Morenas con destellos dimensionales sutiles.', imagen: 'trends/salon_balayage_demo.png' }
];

export const SERVICIOS_DATA: dtoServices[] = [
  { 
    id: 1, codTipo: '001', tabTipo: 'SERV', title: 'Balayage', 
    description: 'Iluminación natural que aporta dimensión y brillo.',
    precio: 'S/. 180', imagen: 'trends/salon_balayage_demo.png'
  },
  { 
    id: 2, codTipo: '001', tabTipo: 'SERV', title: 'Alisado de Keratina', 
    description: 'Elimina el frizz y aporta suavidad extrema.',
    precio: 'S/. 99', imagen: 'trends/salon_balayage_demo.png'
  },
  { 
    id: 3, codTipo: '001', tabTipo: 'SERV', title: 'Botox Orgánico', 
    description: 'Restauración profunda y nutrición intensiva.',
    precio: 'S/. 80', imagen: 'trends/salon_balayage_demo.png'
  },
  { 
    id: 4, codTipo: '001', tabTipo: 'SERV', title: 'Tintes & Decolorado', 
    description: 'Cambio de look con protección capilar.',
    precio: 'S/. 70 / S/. 120', imagen: 'trends/salon_balayage_demo.png'
  },
  { 
    id: 5, codTipo: '001', tabTipo: 'SERV', title: 'Tratamiento Facial', 
    description: 'Piel renovada y luminosa al instante.',
    precio: 'S/. 50', imagen: 'trends/salon_balayage_demo.png'
  },
  { 
    id: 6, codTipo: '001', tabTipo: 'SERV', title: 'Planchado de Cejas', 
    description: 'Marco perfecto para resaltar tu mirada.',
    precio: 'S/. 50', imagen: 'trends/salon_balayage_demo.png'
  },
  { 
    id: 7, codTipo: '001', tabTipo: 'SERV', title: 'Rizado + Lifting', 
    description: 'Pestañas con curvatura natural y volumen.',
    precio: 'S/. 50', imagen: 'trends/salon_balayage_demo.png'
  }
];

export const PROMOCIONES_DATA: dtoPromotions[] = [
  { id: 1, codTipo: '001', tabTipo: 'PROM', title: '2x1 en Laceados', description: 'Lunes a Jueves con previa cita.' }
];
