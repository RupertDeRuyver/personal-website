import { Box, Typography } from "@mui/material";
import Header from "./HomeScreen/Header";
import Section from "../components/Section";
// import Skills from "./HomeScreen/Skills";
// import Experience from "./HomeScreen/Experience";
// import Education from "./HomeScreen/Education";
// import Projects from "./HomeScreen/Projects";
// import { Container } from "@mui/material";

function HomeScreen() {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <Header />
      <Box sx={{ maxWidth: 800, mx: "auto", p: 2, mt: 4 }}>
        <Section title="About me">
          <Typography color="text.primary" align="left">
            Ik ben een gedreven student in het tweede jaar van mijn
            opleiding totIndustrieel Ingenieur (Informatica). In mijn vrije tijd
            ben ik veel bezig met de scouts en werken aan mijn home server. Door
            dat laatste heb ik ervaring met onder andere Docker, Linux en
            netwerken kunnen opdoen.
          </Typography>
        </Section>
      </Box>
    </Box>
  );
}

export default HomeScreen;
