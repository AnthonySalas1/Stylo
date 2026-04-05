export interface dtoTrends {
  id: number;
  codTipo: string;
  tabTipo: string;
  title: string;
  description: string;
  imagen?: string;
}

export interface dtoServices {
  id: number;
  codTipo: string;
  tabTipo: string;
  title: string;
  description: string;
  precio?: string;
  imagen?: string;
}

export interface dtoPromotions {
  id: number;
  codTipo: string;
  tabTipo: string;
  title: string;
  description: string;
}

export interface dtoStaff {
  id: number;
  codTipo: string;
  tabTipo: string;
  title: string;
  description: string;
  imagen?: string;
}

export interface dtoHomeBanner {
  image: string;
  title: string;
  subTitle: string;
  tag: string;
}