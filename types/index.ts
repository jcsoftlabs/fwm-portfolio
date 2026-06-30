export type Profile = {
  name: string;
  title: string;
  tagline: string;
  location: string;
  shortBio: string;
};

export type TimelineCategory =
  | "Formation"
  | "Administration"
  | "Service public"
  | "Leadership";

export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  description: string;
  category: TimelineCategory;
};

export type AchievementStatus = "verified" | "to-complete" | "document-required";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  domain: string;
  period: string;
  status: AchievementStatus;
  needsVerification: boolean;
};

export type VisionAxis = {
  id: string;
  title: string;
  icon: string;
  description: string;
  objectives: string[];
};

export type MediaType = "photo" | "video" | "press" | "quote";

export type MediaItem = {
  id: string;
  title: string;
  type: MediaType;
  description: string;
  placeholder: string;
  imagePath?: string;
};

export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
  imagePath?: string;
};

export type ContactInfo = {
  generalEmail: string;
  pressEmail: string;
  office: string;
  socialLinks: { label: string; href: string }[];
};
