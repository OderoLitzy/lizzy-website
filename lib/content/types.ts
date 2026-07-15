export type ImageSensitivity =
  | "standard"
  | "minors"
  | "health-sensitive"
  | "named-person"
  | "consent-sensitive";

export interface ImageMetadata {
  id: string;
  src: string;
  alt: string;
  status: "approved" | "approved-named-team-portrait";
  sensitivity: ImageSensitivity;
  usage: string[];
}

export interface PageImageSection {
  id: string;
  title: string;
  images: ImageMetadata[];
}

export type NonEmptyTextList = [string, ...string[]];

export interface TeamMember {
  name: string;
  title: string;
  expertise?: string;
  qualifications?: NonEmptyTextList;
  background?: NonEmptyTextList;
  bio?: string;
  photoUrl?: string;
  image?: ImageMetadata;
}

export interface Service {
  title: string;
  description: string;
  cluster: "health" | "economic" | "community" | "legal";
  image: ImageMetadata;
}

export interface Project {
  title: string;
  description: string;
  status: "active" | "upcoming";
  imageUrl?: string;
  image?: ImageMetadata;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: string;
  image: ImageMetadata;
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
