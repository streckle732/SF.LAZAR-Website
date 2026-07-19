export interface PackageItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  priceLabel?: string;
  isCustom?: boolean;
  isFeatured?: boolean;
  description: string;
  features: string[];
  note: string;
}

export interface ServiceOption {
  id: string;
  name: string;
  category: 'esential' | 'birocratie' | 'ceremonie' | 'suplimentar';
  price: number;
  description: string;
  includedInStandard: boolean;
  includedInPremium: boolean;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FleetItem {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  category: string;
}
