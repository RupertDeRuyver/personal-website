import { CardContent, Grid, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Section from "../../components/Section";
import Skills from "../../components/Skills";
import { i18n } from "../../I18nService";

interface Project {
  name: Record<string, string>;
  description: Record<string, string>;
  skills?: string[];
}

interface Props {
  sections: Record<string, Record<string, string>>;
  projects: Record<string, Project>;
}

function Projects({ sections, projects }: Props) {
  const navigate = useNavigate();

  return (
    <Section title={i18n.getString(sections.projects)!}>
      <Grid container spacing={2}>
        {Object.entries(projects).map(([id, project]) => {
          return (
            <Grid size={6}>
              <Card
                variant="outlined"
                onClick={() => navigate(`/projects/${id}`)}
                sx={{
                  bgcolor: "#f8f8f8ff",
                  cursor: "pointer",
                  height: "20vw",
                  borderRadius: 7,
                  transition: "background-color 0.3s",
                  "&:hover": {
                    bgcolor: "#edededff",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" className="name">
                    {i18n.getString(project.name)}
                  </Typography>
                  {project.skills && <Skills ids={project.skills} />}
                  <Typography variant="body2" color="text.secondary">
                    {i18n.getString(project.description)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}

export default Projects;
