import { Box, Divider, Stack, Typography } from "@mui/material";
import Header from "./HomeScreen/Header";
import Section from "../components/Section";
import ExperienceItem from "../components/ExperienceItem";
import data from "../../public/data.json";

function HomeScreen() {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <Header />
      <Box sx={{ maxWidth: 900, mx: "auto", p: 2, pt: 6 }}>
        <Section title="About me">
          <Typography color="text.primary" align="left">
            Ik ben een gedreven student in het tweede jaar van mijn opleiding
            tot Industrieel Ingenieur (Informatica). In mijn vrije tijd ben ik
            veel bezig met de scouts en werken aan mijn home server. Door dat
            laatste heb ik ervaring met onder andere Docker, Linux en netwerken
            kunnen opdoen.
          </Typography>
        </Section>

        <Section title="Experience">
          <Stack spacing={2} divider={<Divider />}>
            {Object.entries(data.experiences).map(([id, experience]) => {
              return (
                <ExperienceItem
                  key={id}
                  name={experience.name}
                  institution={experience.institution}
                  period={experience.period}
                  achievements={experience.achievements}
                />
              );
            })}
          </Stack>
        </Section>

        <Section title="Education">
          <Stack spacing={2} divider={<Divider />}>
            {Object.entries(data.educations).map(([id, education]) => {
              return (
                <ExperienceItem
                  key={id}
                  name={education.name}
                  institution={education.institution}
                  period={education.period}
                  achievements={education.achievements}
                />
              );
            })}
          </Stack>
        </Section>

        <Section title="Projects">
          Hello World!
        </Section>
      </Box>
    </Box>
  );
}

export default HomeScreen;
