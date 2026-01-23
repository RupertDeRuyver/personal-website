// Skill types
export type SkillDisplayType = "normal" | "featured" | "extra";
export type SkillItem = { id: string; type: SkillDisplayType };

// Experience type
export interface ExperienceData {
  name: Record<string, string>;
  institution: Record<string, string>;
  period: Record<string, string>;
  description?: Record<string, string>;
  skills?: SkillItem[];
  icon?: string;
}

// Education type
export interface EducationData {
  name: Record<string, string>;
  institution: Record<string, string>;
  period: Record<string, string>;
  description?: Record<string, string>;
  skills?: SkillItem[];
  icon?: string;
}

// Project type
export interface ProjectData {
  name: Record<string, string>;
  description: Record<string, string>;
  skills?: SkillItem[];
  github?: string;
}
