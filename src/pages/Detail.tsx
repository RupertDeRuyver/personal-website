import { Box } from "@mui/material";
import Section from "../components/Section";
import { useParams } from "react-router";
import data from "../assets/data.json";
import { i18n } from "../I18nService";
import Markdown from 'react-markdown'

const markdownFiles = import.meta.glob("../assets/markdown/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function Detail() {
  const { id, type } = useParams();
  const markdown = markdownFiles[`../assets/markdown/${id}.md`];
  // @ts-expect-error: TS couldn't verify that type is a key of data and id is a key of data[type]
  const item = data[type][id];
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", p: 2, pt: 6 }}>
      <Section title={i18n.getString(item.name)!}>
        <Markdown>{markdown}</Markdown>
      </Section>
    </Box>
  );
}

export default Detail;
