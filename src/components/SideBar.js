import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  PlusIcon,
  MinusIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";
import { Circle } from "react-feather";
import { Navigate } from "react-router-dom";
import LockPattern from "./LockPattern";

export default function SideBar(props) {
  const [open, setOpen] = React.useState(0);
  const [expandLocations, setExpandLocations] = React.useState(false);
  const [expandUsers, setExpandUsers] = React.useState(false);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const setLogOut = props.onSetLogut;
  const handleExpended = (value) => {
    if (value === 0) {
      setExpandLocations(!expandLocations);
    } else if (value === 1) {
      setExpandUsers(!expandUsers);
    }
  };

  const handleLogOut = () => {
    setLogOut(true);
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Card className=" absolute top-15 bg-gray-300 left-0 h-[calc(100vh-2rem)] w-50 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          <Accordion open={open === 1}>
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => {
                  handleOpen(1);
                  handleExpended(0);
                }}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  {expandLocations ? (
                    <MinusIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4`}
                    />
                  ) : (
                    <PlusIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 1 ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Locations
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <Circle strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  First Location
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Circle strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Second Location
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Circle strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Third Location
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => {
                  handleOpen(2);
                  handleExpended(1);
                }}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  {expandUsers ? (
                    <MinusIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4`}
                    />
                  ) : (
                    <PlusIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 1 ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Users
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <Circle strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  John Smith
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Circle strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  John Deer
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon onClick={handleLogOut()} className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
}
