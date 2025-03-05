import React from "react";
import { Avatar } from "@mui/material";

const SidebarOptions = ({ src, Icon, title }) => {
  return (
    <div className="siderow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
};

export default SidebarOptions
