export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export interface DynamicPageHeaderProps {
  title: string;
  meta_title: string;
  description: string;
  date: string;
  draft: boolean;
}

export interface HeroSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}
