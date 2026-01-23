import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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

  const handleChange = (event: SelectChangeEvent<string>) => {
    const nextLang = event.target.value as Lang;
    if (!nextLang) return;
    i18n.setLang(nextLang);
    setCurrent(i18n.getLang());
    onChange?.(nextLang);
  };

  return (
    <FormControl size="small" variant="outlined" sx={{ minWidth: 120 }}>
      <InputLabel sx={{ color: "text.disabled" }}>Language</InputLabel>
      <Select
        value={current}
        label="Language"
        onChange={handleChange}
        MenuProps={{ disableScrollLock: true }}
        sx={{
          bgcolor: "rgba(255,255,255,0.08)",
          color: "text.disabled",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.3)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: (theme) => theme.palette.text.primary,
          },
          ".MuiSelect-icon": { color: "text.disabled" },
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang} value={lang}>
            {lang.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LanguagePicker;
