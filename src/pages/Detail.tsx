import { Box, Typography } from "@mui/material";
import Section from "../components/Section";
import { useParams } from "react-router";
import data from "../assets/data.json";

function Detail() {
  const { id, type } = useParams();
  // @ts-expect-error: TS couldn't verify that type is a key of data and id is a key of data[type]
  const item = data[type][id];
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", p: 2, pt: 6 }}>
      <Section title={item.name}>
        <Typography variant="body1">
          This is the detail page for {item.name}.
        </Typography>
      </Section>
    </Box>
  );
}

export default Detail;
