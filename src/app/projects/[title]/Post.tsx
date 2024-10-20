"use client";

import { Typography } from "@material-tailwind/react";
import Markdown from "react-markdown";

export default function Post({ title, data }: { title: string; data: any }) {
  return (
    <>
      <Typography variant="paragraph">
        {" "}
        <Markdown>
          {
            data.filter(
              (document: any) =>
                document.id.toLowerCase() == title.toLowerCase()
            )[0].content
          }
        </Markdown>
      </Typography>
    </>
  );
}
