import { Avatar, Paper, Typography } from "@mui/material";
import ProfilePicture from "../../assets/profile-picture.jpg";

function Header() {

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
        Student Industrieel Ingenieur Informatica
      </Typography>
    </Paper>
  );
}

export default Header;
