import { useMemo, useState } from "react";
import { Button, Chip, Stack } from "@mui/material";
import data from "../assets/data.json";
import { i18n } from "../I18nService";

type SkillDisplayType = "normal" | "featured" | "extra";
type SkillCategory = keyof typeof data.skill_types;
type SkillItem = { id: string; type: SkillDisplayType };
type Skill = {
  id: string;
  type: SkillDisplayType;
  name: Record<string, string>;
  skillType: SkillCategory;
};

interface Props {
  ids: SkillItem[];
}

function Skills({ ids }: Props) {
  const [showMore, setShowMore] = useState(false);

  const skills = useMemo(() => {
    return ids
      .map((skill) => {
        // @ts-expect-error: TS couldn't verify that id is a key of data.skills
        const skillData = data.skills[skill.id];
        if (!skillData) return undefined;
        return {
          id: skill.id,
          type: skill.type,
          name: skillData.name,
          skillType: skillData.type as SkillCategory,
        };
      })
      .filter(Boolean) as Skill[];
  }, [ids]);

  const hasMore = skills.some((skill) => skill.type === "extra");
  const priority: Record<SkillDisplayType, number> = {
    featured: 0,
    normal: 1,
    extra: 2,
  };

  const visibleSkills = skills
    .filter((skill) => showMore || skill.type !== "extra")
    .sort((a, b) => {
      const orderDiff = priority[a.type] - priority[b.type];
      if (orderDiff !== 0) return orderDiff;
      const typeDiff =
        data.skill_types[a.skillType]?.priority -
        data.skill_types[b.skillType]?.priority;
      if (typeDiff && typeDiff !== 0) return typeDiff;
      return i18n.getString(a.name)!.localeCompare(i18n.getString(b.name)!);
    });

  return (
    <Stack
      direction="row"
      gap={1}
      flexWrap="wrap"
      alignItems="center"
      sx={{ my: 1 }}
    >
      {visibleSkills.map((skill) => {
        const label = i18n.getString(skill.name);
        const borderColor =
          data.skill_types[skill.skillType]?.color ?? "grey.600";
        const chipProps =
          skill.type === "featured"
            ? {
                variant: "filled" as const,
                sx: {
                  fontWeight: 600,
                  border: "1px solid",
                  borderColor: "grey.200",
                  bgcolor: borderColor,
                  color: "white",
                },
              }
            : {
                variant: "filled" as const,
                sx: {
                  bgcolor: "grey.200",
                  color: "grey.900",
                  border: "1px solid",
                  borderColor,
                },
              };
        return <Chip key={skill.id} label={label} {...chipProps} />;
      })}
      {hasMore && (
        <Button
          size="small"
          variant="text"
          disableRipple
          onClick={() => setShowMore((prev) => !prev)}
          sx={{ ml: 1 }}
        >
          {showMore
            ? i18n.getString(data.strings.show_less)
            : i18n.getString(data.strings.show_more)}
        </Button>
      )}
    </Stack>
  );
}

export default Skills;
