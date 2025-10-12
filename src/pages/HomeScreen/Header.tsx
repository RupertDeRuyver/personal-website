import { Avatar, Paper, Skeleton, Typography } from "@mui/material";
import ProfilePicture from "../../assets/profile-picture.jpg";
import { i18n } from "../../I18nService";
import { useState } from "react";

interface Props {
    title: Record<string, string>;
}

function Header({ title }: Props) {

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
      }}
    >
      {loading && <Skeleton variant="circular" width={250} height={250} />}
      <Avatar
        src={ProfilePicture}
        sx={{
          width: 250,
          height: 250,
          display: loading ? "none" : "block",
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
