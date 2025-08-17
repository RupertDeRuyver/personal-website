import { Code } from "lucide-react";
import data from "../../../public/data.json";

function Skills() {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Code className="w-5 h-5 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-800">Skills</h3>
      </div>
      <div className="grid md:grid-cols-1 gap-6">
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">Technical Skills</h4>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        {/* <div>
            <h4 className="font-semibold text-gray-700 mb-3">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div> */}
      </div>
    </>
  );
}

export default Skills;
