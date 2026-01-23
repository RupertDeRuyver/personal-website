import data from "./assets/data.json";

// Language types
export type LanguageDictionary = Record<string, string>;

// Skill types
export type SkillType = "normal" | "featured" | "extra";
export type SkillItemSimple = { id: string; type: SkillType };
export type SkillCategory = keyof typeof data.skill_categories;
export type SkillItemExtended = {
  id: string;
  type: SkillType;
  name: LanguageDictionary;
  skillType: SkillCategory;
};

// Experience type
export interface ExperienceType {
  name: LanguageDictionary;
  institution: LanguageDictionary;
  period: LanguageDictionary;
  description?: LanguageDictionary;
  skills?: SkillItemSimple[];
  icon?: string;
}

// Education type
export interface EducationType {
  name: LanguageDictionary;
  institution: LanguageDictionary;
  period: LanguageDictionary;
  description?: LanguageDictionary;
  skills?: SkillItemSimple[];
  icon?: string;
}

// Project type
export interface ProjectType {
  name: LanguageDictionary;
  description: LanguageDictionary;
  skills?: SkillItemSimple[];
  github?: string;
}
