import { GraduationCap } from "lucide-react";
import ExperienceItem from "../reusable-components/ExperienceItem";

function Education() {
  const education = [
    {
      title:
        "Bachelor of Science in de industriële wetenschappen (informatica)",
      school: "Universiteit Gent",
      period: "2023 - 2026",
      location: undefined,
      achievements: [
        "Front- & Back-End Development",
        "Low Level Programming",
        "Design Patterns",
      ],
    },
    {
      title: "Wetenschappen-Wiskunde",
      school: "Onze-Lieve-Vrouwcollege Zottegem campus Bevegem",
      period: "2017 - 2023",
      location: undefined,
      achievements: [
        "Voorzitter leerlingenraad",
        "Lid schoolraad",
        "Organisatie fuif (College TD 2023)",
      ],
    },
  ];

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="w-5 h-5 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-800">Onderwijs</h3>
      </div>
      <div className="space-y-6">
        {education.map((education) => (
          <ExperienceItem
            title={education.title}
            company={education.school}
            period={education.period}
            location={education.location}
            achievements={education.achievements}
          />
        ))}
      </div>
    </>
  );
}

export default Education;
