import { useMemo, useState } from "react";
import { Button, Chip, Stack } from "@mui/material";
import data from "../assets/data.json";
import { i18n } from "../I18nService";
import type { SkillType, SkillItemSimple, SkillCategory, SkillItemExtended } from "../types";

interface Props {
  ids: SkillItemSimple[];
  achievements?: { id: string }[];
}

interface AchievementExtended {
  id: string;
  name: { [key: string]: string };
  isAchievement: true;
}

function Skills({ ids, achievements }: Props) {
  const [showMore, setShowMore] = useState(false);

  const { allItems, hasMore } = useMemo(() => {
    // Process achievements
    const achievementItems: (AchievementExtended | undefined)[] = (achievements || []).map(
      (achievement) => {
        // @ts-expect-error: TS couldn't verify that id is a key of data.achievements
        const achievementData = data.achievements[achievement.id];
        if (!achievementData) return undefined;
        return {
          id: achievement.id,
          name: achievementData.name,
          isAchievement: true,
        } as AchievementExtended;
      }
    );

    // Process skills
    const skillItems = ids
      .map((skill) => {
        // @ts-expect-error: TS couldn't verify that id is a key of data.skills
        const skillData = data.skills[skill.id];
        if (!skillData) return undefined;
        return {
          id: skill.id,
          type: skill.type,
          name: skillData.name,
          skillType: skillData.type as SkillCategory,
          isAchievement: false,
        };
      })
      .filter(Boolean);

    const allSkills = [
      ...achievementItems.filter(Boolean),
      ...skillItems,
    ] as (AchievementExtended | SkillItemExtended)[];

    const skillsHasMore = skillItems.some(
      (skill: any) => skill.type === "extra"
    );

    return {
      allItems: allSkills,
      hasMore: skillsHasMore,
    };
  }, [ids, achievements]);

  const priority: Record<SkillType, number> = {
    featured: 0,
    normal: 1,
    extra: 2,
  };

  const visibleItems = allItems
    .filter((item) => {
      if ("isAchievement" in item && item.isAchievement) return true;
      return showMore || (item as any).type !== "extra";
    })
    .sort((a, b) => {
      // Achievements come first
      const aIsAchievement = "isAchievement" in a && a.isAchievement;
      const bIsAchievement = "isAchievement" in b && b.isAchievement;

      if (aIsAchievement && !bIsAchievement) return -1;
      if (!aIsAchievement && bIsAchievement) return 1;

      // If both are skills, sort by skill priority
      if (!aIsAchievement && !bIsAchievement) {
        const aSkill = a as any;
        const bSkill = b as any;
        const orderDiff = priority[aSkill.type] - priority[bSkill.type];
        if (orderDiff !== 0) return orderDiff;
        const typeDiff =
          data.skill_categories[aSkill.skillType]?.priority -
          data.skill_categories[bSkill.skillType]?.priority;
        if (typeDiff && typeDiff !== 0) return typeDiff;
        return i18n.getString(aSkill.name)!.localeCompare(i18n.getString(bSkill.name)!);
      }

      return 0;
    });

  return (
    <Stack
      direction="row"
      gap={1}
      flexWrap="wrap"
      alignItems="center"
      sx={{ my: 1 }}
    >
      {visibleItems.map((item) => {
        const label = i18n.getString(item.name);
        const isAchievement = "isAchievement" in item && item.isAchievement;

        if (isAchievement) {
          // Achievement styling
          return (
            <Chip
              key={item.id}
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
        } else {
          // Skill styling
          const skill = item as any;
          const borderColor =
            data.skill_categories[skill.skillType]?.color ?? "grey.600";
          const bgcolor = "grey.200";

          const chipProps =
            skill.type === "featured"
              ? {
                  // Skill type == featured (filled chip)
                  variant: "filled" as const,
                  sx: {
                    fontWeight: 600,
                    border: "1px solid",
                    borderColor: bgcolor,
                    bgcolor: borderColor,
                    color: "white",
                  },
                }
              : {
                  // Skill type == normal (bordered chip)
                  variant: "filled" as const,
                  sx: {
                    color: "grey.900",
                    border: "1px solid",
                    borderColor,
                    bgcolor,
                  },
                };
          return <Chip key={skill.id} label={label} {...chipProps} />;
        }
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
