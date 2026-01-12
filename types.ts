export interface ChartData {
  name: string;
  value: number;
  value2?: number;
}

export interface FeatureProps {
  title: string;
  description: string;
  badge?: string;
  align?: 'left' | 'center' | 'right';
}

export interface NavItem {
  label: string;
  href: string;
}