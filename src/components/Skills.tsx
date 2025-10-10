import { Chip, Stack } from "@mui/material";
import data from "../assets/data.json";
import { i18n } from "../I18nService";

interface Props {
    ids: string[];
}

function Skills({ ids }: Props) {
  // @ts-expect-error: TS couldn't verify that id is a key of data.skills
  const skills = ids.map((id) => data.skills[id]);
  return (
    <Stack direction="row" gap={1} flexWrap="wrap" sx={{ my: 1 }}>
      {skills
        .sort((a, b) => i18n.getString(a.name)!.localeCompare(i18n.getString(b.name)!))
        .map((skill) => {
          return <Chip label={i18n.getString(skill.name)} />;
        })}
    </Stack>
  );
}

export default Skills;