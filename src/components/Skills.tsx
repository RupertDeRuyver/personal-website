import { Chip, Stack } from "@mui/material";
import data from "../assets/data.json";

interface Props {
    ids: string[];
}

function Skills({ ids }: Props) {

  const skills = ids.map(id => data.skills[id]);
  return (
    <Stack direction="row" gap={1} flexWrap="wrap" sx={{ my: 1}}>
      {skills.sort((a, b) => a.name.localeCompare(b.name)).map((skill) => {
        return <Chip label={skill.name} onClick={() => {}} />;
      })}
    </Stack>
  );
}

export default Skills;