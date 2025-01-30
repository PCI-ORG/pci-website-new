import {
    Drawer,
    Typography,
    IconButton,
    Button,
    List,
    ListItem,
    Collapse,
} from "@material-tailwind/react";
import { useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "./MenuProvider";
import SITEMAP from "./Sitemap";
import { useRouter } from "next/navigation";

const projectLinks = (open: boolean) => {
    return (
        <Collapse open={open}>
            <List>
                {SITEMAP.projects.pages.map(({ link, name, footer }, key) => (
                    <a key={key} href={`/projects/${link}`}>
                        <ListItem className="dark:text-white">{name}</ListItem>
                    </a>
                ))}
            </List>
        </Collapse>
    );
};

export default function MyDrawer() {
    const router = useRouter();
    const { openRight, closeDrawerRight, openDrawerRight } =
        useContext(MenuContext);
    const [open, setOpen] = useState(false);
    const drawerOverlayRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const overlay = drawerOverlayRef.current;
        if (overlay != undefined) {
            console.log(overlay.className);
            overlay.className += " !fixed";
        }
    }, [drawerOverlayRef.current]);

    return (
        <Drawer
            placement="right"
            open={openRight}
            onClose={closeDrawerRight}
            className="p-4 !h-screen dark:bg-pciDark bg-white"
            overlay={true}
            overlayRef={drawerOverlayRef}
        >
            <div className="mb-6 flex items-center justify-between ">
                <Typography variant="h5" color="blue-gray">
                    {" "}
                </Typography>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawerRight}
                >
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
                {SITEMAP.content.pages.map(
                    ({ link, name, footer, disabled }, key) => (
                        <div key={key}>
                            <ListItem
                                className="dark:text-white"
                                onClick={() => {
                                    if (!disabled) router.push(`/${link}`);
                                    if (name == "Projects")
                                        if (open) setOpen(false);
                                        else setOpen(true);
                                    else {
                                        closeDrawerRight();
                                    }
                                }}
                            >
                                {name}
                                {name == "Projects" && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className={`inline-block mx-2 align-middle size-4 ${
                                            open ? "rotate-90" : "rotate-0"
                                        } transition-all`}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                )}
                            </ListItem>
                            {name == "Projects" ? projectLinks(open) : ""}
                        </div>
                    )
                )}
            </List>
        </Drawer>
    );
}
