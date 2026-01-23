import { Avatar, Box, Paper, Skeleton, Typography } from "@mui/material";
import ProfilePicture from "../../assets/profile-picture.jpg";
import { i18n } from "../../I18nService";
import { useState } from "react";
import LanguagePicker from "../../components/LanguagePicker";

type Lang = ReturnType<typeof i18n.getLang>;

interface Props {
  title: Record<string, string>;
  onLangChange: (lang: Lang) => void;
}

function Header({ title, onLangChange }: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <Paper
      square
      elevation={8}
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "#14213d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 2,
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <LanguagePicker onChange={onLangChange} />
      </Box>
      {loading && <Skeleton variant="circular" width={250} height={250} />}
      <Avatar
        src={ProfilePicture}
        sx={{
          width: 250,
          height: 250,
          display: loading ? "none" : "block",
          border: "2px solid rgba(255, 255, 255, 0.2)",
        }}
        onLoad={() => setLoading(false)}
      />
      <Typography variant="h1" fontWeight="bold" color="text.disabled">
        Rupert De Ruyver
      </Typography>
      <Typography variant="h4" color="text.disabled">
        {i18n.getString(title)}
      </Typography>
    </Paper>
  );
}

export default Header;
