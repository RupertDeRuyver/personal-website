import { CardContent, Grid, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Section from "../../components/Section";

interface Project {
  name: string;
  description: string;
  skills: string[];
}

function Projects({projects} : {projects: Record<string, Project>}) {
  const navigate = useNavigate();

    return (
      <Section title="Projects">
        <Grid container spacing={2}>
          {Object.entries(projects).map(([id, project]) => {
            return (
              <Grid size={4}>
                <Card
                  onClick={() => navigate(`/projects/${id}`)}
                  variant="outlined"
                  sx={{
                    bgcolor: "#c8d9ffff",
                    cursor: "pointer",
                    height: "15vw",
                    borderRadius: 7,
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
    );
}

export default Projects;