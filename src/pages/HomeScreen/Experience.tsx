import { Stack, Divider } from "@mui/material";
import ExperienceItem from "../../components/ExperienceItem";
import Section from "../../components/Section";
import Icon from '@mui/icons-material/Work';

interface Experience {
  name: string;
  institution: string;
  period: string;
  achievements?: string[];
  skills?: string[];
  icon?: string;
}


function Experience({ experiences }: { experiences: Record<string, Experience> }) {
  return (
    <Section title="Experience" icon={<Icon fontSize="large" sx={{ verticalAlign: 'middle', mr: 1 }} />} >
      <Stack spacing={2} divider={<Divider />}>
        {Object.entries(experiences).map(([id, experience]) => {
          return (
            <ExperienceItem
              id={id}
              category="experiences"
              name={experience.name}
              institution={experience.institution}
              period={experience.period}
              achievements={experience.achievements}
              skills={experience.skills}
              icon={experience.icon}
            />
          );
        })}
      </Stack>
    </Section>
  );
}

export default Experience;