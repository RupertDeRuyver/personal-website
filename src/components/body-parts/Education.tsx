import { GraduationCap } from "lucide-react";
import ExperienceItem from "../reusable-components/ExperienceItem";
import data from "../../../public/data.json";

function Education() {
  if (data.educations.length !== 0) {
    return (
      <>
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-5 h-5 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-800">Education</h3>
        </div>
        <div className="space-y-6">
          {data.educations.map((education) => (
            <ExperienceItem
              title={education.name}
              company={education.institution}
              period={education.period}
              location={education.location}
              achievements={education.achievements}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Education;
