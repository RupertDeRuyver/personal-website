import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import data from "../assets/data.json";
import { i18n } from "../I18nService";

const ContactButton = () => {
  const actions = [
    {
      icon: <LinkedInIcon />,
      name: i18n.getString(data.contact.linkedin.name),
      link: data.contact.linkedin.link,
    },
    {
      icon: <GitHubIcon />,
      name: i18n.getString(data.contact.github.name),
      link: data.contact.github.link,
    },
    {
      icon: <EmailIcon />,
      name: data.contact.email.label,
      link: data.contact.email.link,
    },
    {
      icon: <PhoneIcon />,
      name: data.contact.phone.label,
      link: data.contact.phone.link,
    },
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
