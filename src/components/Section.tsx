import { Typography } from "@mui/material";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="text.primary"
          sx={{ mb: 2 }}
        >
          {title}
        </Typography>
        {children}
      </>
    );
}

export default Section;