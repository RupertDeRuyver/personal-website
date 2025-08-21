import { Briefcase } from "lucide-react";
import ExperienceItem from "../reusable-components/ExperienceItem";
import data from "../../../public/data.json";

function Experience() {
  if (Object.values(data.experiences).length !== 0) {
    return (
      <>
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
        </div>
        <div className="space-y-6">
          {Object.values(data.experiences).map((experience) => (
            <ExperienceItem
              title={experience.name}
              company={experience.institution}
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
