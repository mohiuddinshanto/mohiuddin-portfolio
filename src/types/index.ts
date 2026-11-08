export interface Project {
  id: number;
  name: string;
  image: string;
  role: string;
  tags: string[];
  stack: string;
  desc: string;
  challenges?: string;
  improvements?: string;
  live: string;
  github: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface WPSite {
  name: string;
  url: string;
  unique: string;
  badge: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  desc: string;
}

export interface EducationItem {
  level: string;
  title: string;
  institution: string;
}
