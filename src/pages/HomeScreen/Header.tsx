import { Avatar, Paper, Typography } from "@mui/material";
import ProfilePicture from "../../assets/profile-picture.jpg";
import { i18n } from "../../I18nService";

interface Props {
    title: Record<string, string>;
}

function Header({ title }: Props) {

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
        p: 2
      }}
    >
      <Avatar
        src={ProfilePicture}
        sx={{
          width: 250,
          height: 250,
        }}
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
