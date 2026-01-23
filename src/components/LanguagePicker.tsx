import {
  FormControl,
  MenuItem,
  Select,
  Box,
  Tooltip,
  type SelectChangeEvent,
} from "@mui/material";
import { useMemo, useState } from "react";
import { i18n } from "../I18nService";

type Lang = ReturnType<typeof i18n.getLang>;

interface Props {
  onChange?: (lang: Lang) => void;
}

function LanguagePicker({ onChange }: Props) {
  const languages = useMemo(() => i18n.getSupportedLangs(), []);
  const [current, setCurrent] = useState<Lang>(i18n.getLang());

  const flagLookup: Record<Lang, { flag: string; label: string }> = {
    nl: { flag: "/icons/flags/nl.svg", label: "Nederlands" },
    en: { flag: "/icons/flags/en.svg", label: "English" },
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    const nextLang = event.target.value as Lang;
    if (!nextLang) return;
    i18n.setLang(nextLang);
    setCurrent(i18n.getLang());
    onChange?.(nextLang);
  };

  return (
    <FormControl size="small" variant="outlined" sx={{ minWidth: 72 }}>
      <Select
        value={current}
        onChange={handleChange}
        displayEmpty
        MenuProps={{
          disableScrollLock: true,
          PaperProps: { sx: { minWidth: 96 } },
        }}
        sx={{
          bgcolor: "rgba(255,255,255,0.06)",
          color: "text.disabled",
          borderRadius: 2,
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            py: 0.5,
            pl: 0.75,
            pr: 3,
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.15)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.35)",
          },
          ".MuiSelect-icon": { color: "text.disabled" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.5)",
          },
        }}
        renderValue={(value) => {
          const option = flagLookup[value as Lang];
          if (!option) return value;
          return (
            <Tooltip title={option.label} placement="bottom-start">
              <Box
                component="img"
                src={option.flag}
                alt={option.label}
                sx={{
                  width: 22,
                  height: 16,
                  borderRadius: 0.75,
                  boxShadow: "none",
                  display: "block",
                }}
              />
            </Tooltip>
          );
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang}
            value={lang}
            sx={{ display: "flex", justifyContent: "center", py: 1 }}
          >
            <Tooltip title={flagLookup[lang]?.label} placement="right">
              <Box
                component="img"
                src={flagLookup[lang]?.flag}
                alt={flagLookup[lang]?.label}
                sx={{
                  width: 24,
                  height: 17,
                  borderRadius: 0.75,
                  boxShadow: "none",
                  display: "block",
                }}
              />
            </Tooltip>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LanguagePicker;
