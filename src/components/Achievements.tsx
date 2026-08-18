import { Chip, Stack } from "@mui/material";
import data from "../assets/data.json";
import { i18n } from "../I18nService";

interface Props {
  ids: { id: string }[];
}

function Achievements({ ids }: Props) {
  const achievements = ids.map((achievement) => {
    // @ts-expect-error: TS couldn't verify that id is a key of data.achievements
    return data.achievements[achievement.id];
  }).filter(Boolean);

  return (
    <Stack
      direction="row"
      gap={1}
      flexWrap="wrap"
      alignItems="center"
      sx={{ my: 1 }}
    >
      {achievements.map((achievement, index) => {
        const label = i18n.getString(achievement.name);
        return (
          <Chip
            key={index}
            label={label}
            variant="filled"
            sx={{
              fontWeight: 500,
              bgcolor: "#daa520",
              color: "#ffffff",
              border: "1px solid #b8860b",
            }}
          />
        );
      })}
    </Stack>
  );
}

export default Achievements;
