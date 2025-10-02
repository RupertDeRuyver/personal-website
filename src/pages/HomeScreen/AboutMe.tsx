import { Typography } from "@mui/material";
import Section from "../../components/Section";

interface Props {
    content: string;
}

function AboutMe({ content }: Props) {
    return (
      <Section title="About me">
        <Typography color="text.primary" align="left">
          {content}
        </Typography>
      </Section>
    );
}

export default AboutMe;