import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface PracticeArea {
  title: string;
  shortDescription: string;
  fullDescription: string;
  examples: string[];
  icon: LucideIcon;
  id: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  mobile: string;
  email: string;
  pec: string;
  address: string;
  city: string;
}