import {
  Drawer,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { MenuContext } from "./MenuProvider";
export default function MyDrawer(){
    const {openRight, closeDrawerRight, openDrawerRight} = useContext(MenuContext)
    return (
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 !h-screen"
      >
        <div className="mb-6 flex items-center justify-between ">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
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
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    )}