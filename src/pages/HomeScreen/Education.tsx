import { Stack, Divider } from "@mui/material";
import ExperienceItem from "../../components/ExperienceItem";
import Section from "../../components/Section";
import { i18n } from "../../I18nService";

interface Education {
  name: Record<string, string>;
  institution: Record<string, string>;
  period: Record<string, string>;
  description?: Record<string, string> | undefined;
  skills?: string[];
  icon?: string;
}

interface Props {
  sections: Record<string, Record<string, string>>;
  educations: Record<string, Education>;
}

function Education({ sections, educations }: Props) {

  return (
    <Section title={i18n.getString(sections.education)!}>
      <Stack spacing={2} divider={<Divider />}>
        {Object.entries(educations).map(([id, education]) => {
          return (
            <ExperienceItem
              id={id}
              category="educations"
              name={i18n.getString(education.name)!}
              institution={i18n.getString(education.institution)!}
              period={i18n.getString(education.period)!}
              description={i18n.getString(education.description)}
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
