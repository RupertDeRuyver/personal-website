import { Code } from "lucide-react";
import data from "../../../public/data.json";

const colors: Record<string, string> = {
  technical: "bg-blue-100 text-blue-800",
  "programming-language": "bg-green-100 text-green-800",
  soft: "bg-red-100 text-red-800",
};

function Skills() {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Code className="w-5 h-5 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-800">Skills</h3>
      </div>
      <div
        className="grid gap-6 grid-cols-3"
        // className={`grid gap-6 grid-cols-${
        //   Object.values(data.skill_types).length
        // }`}
      >
        {Object.entries(data.skill_types).map(([type_id, skill_type]) => (
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">
              {skill_type.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {Object.values(data.skills)
                .filter((skill) => skill.type === type_id)
                .map((skill) => (
                  <span
                    className={`px-3 py-1 ${colors[type_id]} rounded-full text-sm font-medium`}
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
