
import React from "react";
import SidebarOptions from "./SidebarOptions.jsx";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AddIcon from "@mui/icons-material/Add";



const GroupLeftbar = () => {
  return (
    <>
      <div className="padding">
        <h4>Groups</h4>
        <SidebarOptions Icon={DynamicFeedIcon} title="Your Feed" />
        <SidebarOptions Icon={ScheduleIcon} title="Discover" />
        <SidebarOptions Icon={GroupsSharpIcon} title="Your groups" />
        <button className="btn-1 flex">
            <AddIcon />
            Create new group
            </button>
      </div>
    </>
  );
}

export default GroupLeftbar