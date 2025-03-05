import React, { useState } from "react";
import GroupLeftbar from "./GroupLeftbar";
import CloseIcon from "@mui/icons-material/Close";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { IconButton,Modal } from "@mui/material";
import GroupMain from "./GroupMain";


const Group = () => {
     const [group, setGroup] = useState(false);
  return (
    <>
      <Modal open={group} onClose={() => setGroup(false)}>
        <div className="modalPop popwidth">
          <div className="modalHeading">
            Groups
            <IconButton onClick={() => setGroup(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <GroupLeftbar />
        </div>
      </Modal>

      <div className="flex">
        <div onClick={() => setGroup(true)} className="handleLeft">
          <GroupAddIcon />
        </div>
        <div className="leftSideContainer">
          <GroupLeftbar />
        </div>
        <GroupMain />
      </div>
    </>
  );
}

export default Group