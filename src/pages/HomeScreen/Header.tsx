import { Avatar, Paper, Typography } from "@mui/material";
import ProfilePicture from "../../assets/profile-picture.jpg";

function Header() {

  return (
    <Paper
      square
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Avatar
        src={ProfilePicture}
        sx={{
          width: 250,
          height: 250,
        }}
      />
      <Typography variant="h1" fontWeight="bold" color="text.primary">
        Rupert De Ruyver
      </Typography>
      <Typography variant="h4" color="text.secondary">
        Student Industrieel Ingenieur Informatica
      </Typography>
    </Paper>
  );
}

export default Header;
