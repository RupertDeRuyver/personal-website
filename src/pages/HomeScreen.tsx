import { Box } from "@mui/material";
import Header from "./HomeScreen/Header";
import data from "../assets/data.json";
import Education from "./HomeScreen/Education";
import Experience from "./HomeScreen/Experience";
import Projects from "./HomeScreen/Projects";
import AboutMe from "./HomeScreen/AboutMe";

function HomeScreen() {
   
  return (
    <Box sx={{ bgcolor: "background.default" }}>

      <Header />

      <Box sx={{ maxWidth: 900, mx: "auto", p: 2, pt: 6 }}>

        <AboutMe content={data.aboutme} />

        <Experience experiences={data.experiences} />

        <Education educations={data.educations} />

        <Projects projects={data.projects} />
        
      </Box>

    </Box>
  );
}

export default HomeScreen;
