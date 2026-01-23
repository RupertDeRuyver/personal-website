import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const ContactButton = () => {
  const actions = [
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rupert-deruyver/",
    },
    {
      icon: <GitHubIcon />,
      name: "GitHub",
      link: "https://github.com/RupertDeRuyver",
    },
    {
      icon: <EmailIcon />,
      name: "rupertderuyver@gmail.com",
      link: "mailto:rupertderuyver@gmail.com",
    },
    { icon: <PhoneIcon />, name: "+32 492 45 37 04", link: "tel:+32492453704" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 1000,
      }}
    >
      <SpeedDial
        ariaLabel="Contact Options"
        icon={<ContactMailIcon />}
        direction="up"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => window.open(action.link, "_blank")}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ContactButton;
