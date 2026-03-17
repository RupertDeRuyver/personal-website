import {
  CardContent,
  Grid,
  Card,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Section from "../../components/Section";
import Skills from "../../components/Skills";
import { i18n } from "../../I18nService";
import Icon from "@mui/icons-material/StorageRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import type { ProjectType } from "../../types";

interface Props {
  sections: Record<string, Record<string, string>>;
  projects: Record<string, ProjectType>;
}

function Projects({ sections, projects }: Props) {
  const navigate = useNavigate();

  return (
    <Section
      title={i18n.getString(sections.projects)!}
      icon={<Icon fontSize="large" sx={{ verticalAlign: "middle", mr: 2 }} />}
    >
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
                  height: "25vw",
                  borderRadius: 7,
                  transition: "background-color 0.3s",
                  "&:hover": {
                    bgcolor: "#edededff",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h5" className="name">
                    {i18n.getString(project.name)}
                  </Typography>
                  {project.skills && <Skills ids={project.skills} />}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="justify"
                  >
                    {i18n.getString(project.description)}
                  </Typography>
                </CardContent>

                {project.github && (
                  <CardActions
                    sx={{ justifyContent: "flex-end", pb: 2, pr: 2 }}
                  >
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<GitHubIcon />}
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      GitHub
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}

export default Projects;
