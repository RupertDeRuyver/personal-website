import { Stack, Divider } from "@mui/material";
import ExperienceItem from "../../components/ExperienceItem";
import Section from "../../components/Section";
import Icon from "@mui/icons-material/Work";
import { i18n } from "../../I18nService";
import type { ExperienceType } from "../../types";

interface Props {
  sections: Record<string, Record<string, string>>;
  experiences: Record<string, ExperienceType>;
}

function Experience({ sections, experiences }: Props) {
  return (
    <Section
      title={i18n.getString(sections.experience)!}
      icon={<Icon fontSize="large" sx={{ verticalAlign: "middle", mr: 2 }} />}
    >
      <Stack spacing={2} divider={<Divider />}>
        {Object.entries(experiences).map(([id, experience]) => {
          return (
            <ExperienceItem
              id={id}
              category="experiences"
              name={i18n.getString(experience.name)!}
              institution={i18n.getString(experience.institution)!}
              period={i18n.getString(experience.period)!}
              description={i18n.getString(experience.description)}
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
