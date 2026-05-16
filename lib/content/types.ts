export interface TeamMember {
  name: string;
  title: string;
  bio?: string;
  photoUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  cluster: "health" | "economic" | "community" | "legal";
}

export interface Project {
  title: string;
  description: string;
  status: "active" | "upcoming";
  imageUrl?: string;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface ImpactStat {
  label: string;
  value: number;
  suffix?: string;
}
