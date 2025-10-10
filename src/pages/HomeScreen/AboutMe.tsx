import { Typography } from "@mui/material";
import Section from "../../components/Section";
import { i18n } from "../../I18nService";
import Icon from "@mui/icons-material/Person";

interface Props {
  sections: Record<string, Record<string, string>>;
  content: Record<string, string>;
}

function AboutMe({ sections, content }: Props) {
  return (
    <Section
      title={i18n.getString(sections.aboutme)!}
      icon={<Icon fontSize="large" sx={{ verticalAlign: "middle", mr: 2 }} />}
    >
      <Typography color="text.primary" align="left">
        {i18n.getString(content)}
      </Typography>
    </Section>
  );
}

export default AboutMe;
