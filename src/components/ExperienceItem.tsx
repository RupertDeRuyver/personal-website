import { Box, Stack, Typography } from "@mui/material";

interface Props {
  name: string;
  institution: string;
  period: string;
  achievements?: string[];
}

function ExperienceItem({
  name,
  institution,
  period,
  achievements,
}: Props) {
  return (
    <Box>
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
