import React from "react";
import SidebarOptions from "./SidebarOptions.jsx";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import RedeemTwoToneIcon from "@mui/icons-material/RedeemTwoTone";
import RecordVoiceOverSharpIcon from "@mui/icons-material/RecordVoiceOverSharp";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";


const FriendLeftbar = () => {
  return (
    <>
   
      <div className="padding">
        <h4>Friends</h4>
        <SidebarOptions Icon={GroupIcon} title="Home" />
        <SidebarOptions
          Icon={RecordVoiceOverSharpIcon}
          title="Friend Requests"
        />
        <SidebarOptions Icon={PersonAddRoundedIcon} title="Suggestions" />
        <SidebarOptions Icon={GroupsSharpIcon} title="All Friends" />
        <SidebarOptions Icon={RedeemTwoToneIcon} title="Birthdays" />
        <SidebarOptions Icon={GroupsSharpIcon} title="Custom lists" />
      </div>
    </>
  );
};

export default FriendLeftbar;
