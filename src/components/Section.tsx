import { Paper, Typography } from "@mui/material";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <Paper sx={{ p: 3, pt: 2, mb: 3, borderRadius: 4 }} elevation={2}>
        <Typography
          fontSize={"2.6rem"}
          fontWeight="400"
          color="text.primary"
          sx={{ mb: 2 }}
        >
          {title}
        </Typography>
        {children}
      </Paper>
    );
}

export default Section;