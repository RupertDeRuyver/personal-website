import { Calendar, MapPin } from "lucide-react";

interface Props {
  title: string;
  company: string;
  period: string;
  location?: string;
  achievements?: string[];
}

function ExperienceItem({
  title,
  company,
  period,
  location,
  achievements,
}: Props) {
  return (
    <div className="border-l-4 border-blue-200 pl-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <div>
          <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
          <p className="text-blue-600 font-medium">{company}</p>
        </div>
        <div className="text-sm text-gray-600 mt-1 md:mt-0 md:text-right">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {period}
          </div>
          {location !== undefined && (
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
          )}
        </div>
      </div>
      {achievements !== undefined && achievements.length !== 0 && (
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExperienceItem;
