import { Box } from "@mui/material";
import Header from "./HomeScreen/Header";
import data from "../assets/data.json";
import Education from "./HomeScreen/Education";
import Experience from "./HomeScreen/Experience";
import Projects from "./HomeScreen/Projects";
import AboutMe from "./HomeScreen/AboutMe";
import ContactButton from "../components/ContactButton";
import { useState } from "react";
import { i18n } from "../I18nService";

type Lang = ReturnType<typeof i18n.getLang>;

function HomeScreen() {
  const [activeLang, setActiveLang] = useState<Lang>(i18n.getLang());

  const handleLangChange = (lang: Lang) => {
    setActiveLang(lang);
  };

  return (
    <>
      <Box sx={{ bgcolor: "background.default" }} data-lang={activeLang}>
        <Header title={data.title} onLangChange={handleLangChange} />

        <Box sx={{ maxWidth: 900, mx: "auto", p: 2, pt: 6 }}>
          <AboutMe sections={data.sections} content={data.aboutme} />

          <Experience
            sections={data.sections}
            experiences={data.experiences as any}
          />

          <Education
            sections={data.sections}
            educations={data.educations as any}
          />

          <Projects sections={data.sections} projects={data.projects as any} />
        </Box>
      </Box>
      <ContactButton />
    </>
  );
}

export default HomeScreen;
