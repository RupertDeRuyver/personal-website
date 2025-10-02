import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  category: string;
  name: string;
  institution: string;
  period: string;
  achievements?: string[];
}

function ExperienceItem({
  id,
  category,
  name,
  institution,
  period,
  achievements,
}: Props) {

  const navigate = useNavigate();

  return (
    <Box
      onClick={() => {
        navigate(`/${category}/${id}`);
      }}
      sx={{
        cursor: "pointer",
        p: 1,
        borderRadius: 3,
        transition: "background-color 0.3s",
        "&:hover": {
          bgcolor: "#c8d9ffff",
        },
      }}
    >
      <Stack spacing={0}>
        <Typography color="text.primary" fontWeight="400" fontSize="1.7rem">
          {name}
        </Typography>
        <Typography color="text.primary" fontWeight="300" fontSize="1.4rem">
          {institution}
        </Typography>
        <Typography color="text.secondary" fontWeight="300" fontSize="1.0rem">
          {period}
        </Typography>
      </Stack>
      {achievements && (
        <Stack sx={{ mt: 0.5 }}>
          {achievements.map((achievement) => (
            <Typography color="text.primary" fontSize="1.0rem">
              {achievement}
            </Typography>
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default ExperienceItem;
