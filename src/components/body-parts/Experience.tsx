import { Briefcase } from "lucide-react";
import ExperienceItem from "../reusable-components/ExperienceItem";

function Experience() {
  const experience = [
    {
      title: "Redder",
      company: "Stad Zottegem",
      period: "2023 - heden",
      location: "Zottegem",
      achievements: [],
    },
    {
      title: "Leider",
      company: "Scouts Zottegem",
      period: "2024 - heden",
      location: "Zottegem",
      achievements: [],
    },
  ];

  if (experience.length !== 0) {
    return (
      <>
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
        </div>
        <div className="space-y-6">
          {experience.map((experience) => (
            <ExperienceItem
              title={experience.title}
              company={experience.company}
              period={experience.period}
              location={experience.location}
              achievements={experience.achievements}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Experience;
