export interface NewsItem {
  date: string;
  content: string;
  type?: 'conference' | 'award' | 'general';
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  links: { name: string; url: string }[];
  tags?: string[];
  status?: string; // e.g., "Full Paper", "In Preparation"
}

export interface Project {
  title: string;
  role: string;
  duration: string;
  description: string;
  techStack: string[];
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: string;
}

export interface Hobby {
  title: string;
  description: string;
  image: string;
  size?: 'small' | 'medium' | 'large'; // Control grid span
}