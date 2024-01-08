import { Divider, List } from "@mui/material";
import { CustomDrawer, ListItems } from "./customdrawer";
import { Dashboard, People, NoteAlt, CorporateFare, PersonPinCircle, AccessTime, Checklist, SupervisedUserCircle, Settings } from "@mui/icons-material";
import { useLocation } from "@remix-run/react";

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  const getpath = pathname.split("/");
  return (
    <CustomDrawer>
      <List>
        <ListItems selected={getpath[1] == "" && true} href="/" text="Dashboard">
          <Dashboard />
        </ListItems>
        <ListItems selected={getpath[1] == "attendance" && true} href="/attendance" text="Attendance">
          <NoteAlt />
        </ListItems>
      </List>
      <Divider />
      <List>
        <ListItems selected={getpath[1] == "employee" && true} href="/employee" text="Employee">
          <People />
        </ListItems>
        <ListItems selected={getpath[1] == "buildings" && true} href="/buildings" text="Buildings">
          <CorporateFare />
        </ListItems>
        <ListItems selected={getpath[1] == "positions" && true} href="/positions" text="Positions">
          <PersonPinCircle />
        </ListItems>
        <ListItems selected={getpath[1] == "shift" && true} href="/shift" text="Shift">
          <AccessTime />
        </ListItems>
      </List>
      <Divider />
      <List>
        <ListItems selected={getpath[1] == "users" && true} href="/users" text="User Administrator">
          <SupervisedUserCircle />
        </ListItems>
        <ListItems selected={getpath[1] == "config" && true} href="/config" text="Web Configs">
          <Settings />
        </ListItems>
      </List>
    </CustomDrawer>
  );
}
