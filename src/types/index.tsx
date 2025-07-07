export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    duration: string;
    github?: string;
    live?: string;
    image: string;
    highlights: string[];
  }
  
  export interface Experience {
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
    achievements: string[];
    type: 'internship' | 'fulltime';
  }
  