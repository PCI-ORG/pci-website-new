import {
  Drawer,
  Typography,
  IconButton,
  Button,
  List,
  ListItem,
  Collapse,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { MenuContext } from "./MenuProvider";
import { SITEMAP } from "./sitemap";

const projectLinks = (open: boolean) => {
  return (
    <Collapse open={open}>
      <List>
        {SITEMAP.projects.pages.map(({ link, name, footer }, key) => (
          <a href={`/projects/${link}`}>
            <ListItem key={key}>
              <a href="">{name}</a>
            </ListItem>
          </a>
        ))}
      </List>
    </Collapse>
  );
};

export default function MyDrawer() {
  const { openRight, closeDrawerRight, openDrawerRight } =
    useContext(MenuContext);
  const [open, setOpen] = useState(false);
  return (
    <Drawer
      placement="right"
      open={openRight}
      onClose={closeDrawerRight}
      className="p-4 !h-screen"
    >
      <div className="mb-6 flex items-center justify-between ">
        <Typography variant="h5" color="blue-gray">
          {" "}
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawerRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <List>
        {SITEMAP.content.pages.map(({ link, name, footer }, key) => (
          <a
            key={key}
            href={`/${link}`}
            onClick={() => {
              name == "Projects" ? (open ? setOpen(false) : setOpen(true)) : "";
            }}
          >
            <ListItem>{name}</ListItem>
            {name == "Projects" ? projectLinks(open) : ""}
          </a>
        ))}
      </List>
    </Drawer>
  );
}
