import { Stack, Divider } from "@mui/material";
import ExperienceItem from "../../components/ExperienceItem";
import Section from "../../components/Section";

interface Education {
  name: string;
  institution: string;
  period: string;
  achievements?: string[];
  skills?: string[];
  icon?: string;
}

function Education({educations}: {educations: Record<string, Education>}) {
  return (
    <Section title="Education">
      <Stack spacing={2} divider={<Divider />}>
        {Object.entries(educations).map(([id, education]) => {
          return (
            <ExperienceItem
              id={id}
              category="educations"
              name={education.name}
              institution={education.institution}
              period={education.period}
              achievements={education.achievements}
              skills={education.skills}
              icon={education.icon}
            />
          );
        })}
      </Stack>
    </Section>
  );
}

export default Education;