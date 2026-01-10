
import { ReactNode } from "react";

export interface TimelineItem {
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
  icon: ReactNode;
  imageSrc?: string;
  highlights?: string[];
}
