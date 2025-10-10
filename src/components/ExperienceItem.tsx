import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
//import { useNavigate } from "react-router-dom";
import Skills from "./Skills";
import { useState } from "react";

interface Props {
  id: string;
  category: string;
  name: string;
  institution: string;
  period: string;
  description?: string;
  skills?: string[];
  icon?: string;
}

function ExperienceItem({
  id,
  //category,
  name,
  institution,
  period,
  description,
  skills,
  icon,
}: Props) {
  //const navigate = useNavigate();
  const [iconLoaded, setIconLoaded] = useState(false);

  return (
    <Box
      //onClick={() => {
      //  navigate(`/${category}/${id}`);
      //}}
      sx={{
        //cursor: "pointer",
        p: 1,
        //"&:hover": {
        //  "& .name": {
        //    color: "#1976d2",
        //    textDecoration: "underline",
        //  },
        //},
      }}
    >
      <Grid container spacing={1}>
        <Grid size={1}>
          <Box
            sx={{
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: iconLoaded ? "block" : "none",
              }}
              alt={id}
              src={`/icons/${icon}`}
              onLoad={() => setIconLoaded(true)}
            />
            {!iconLoaded && (
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "100%" }}
              />
            )}
          </Box>
        </Grid>
        <Grid size={11}>
          <Stack spacing={0}>
            <Typography
              className="name"
              color="text.primary"
              fontWeight="400"
              fontSize="1.7rem"
            >
              {name}
            </Typography>
            <Typography color="text.primary" fontWeight="300" fontSize="1.4rem">
              {institution}
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight="300"
              fontSize="1.0rem"
            >
              {period}
            </Typography>
            {skills && <Skills ids={skills} />}
          </Stack>
          {description && (
            <Stack sx={{ mt: 0.5 }}>
              <Typography
                color="text.primary"
                fontSize="1.0rem"
                sx={{ whiteSpace: "pre-line" }}
              >
                {description}
              </Typography>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ExperienceItem;
