import { Box, Card, CardContent, Divider, Grid, Stack, Typography } from "@mui/material";
import Header from "./HomeScreen/Header";
import Section from "../components/Section";
import ExperienceItem from "../components/ExperienceItem";
import data from "../../public/data.json";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
   const navigate = useNavigate();
   
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
                  id={id}
                  category="experiences"
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
                  id={id}
                  category="educations"
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
          <Grid container spacing={2}>
            {Object.entries(data.projects).map(([id, project]) => {
              return (
                <Grid size={4}>
                  <Card
                    onClick={() => navigate(`/projects/${id}`)}
                    variant="outlined"
                    sx={{
                      bgcolor: "#c8d9ffff",
                      cursor: "pointer",
                      height: "15vw",
                      borderRadius: 7
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6">{project.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Section>
      </Box>
    </Box>
  );
}

export default HomeScreen;
