export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  popular?: boolean;
}

export interface Testimonial {
  text: string;
  author: string;
  type: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Step {
  number: number;
  icon: string;
  title: string;
  description: string;
}
