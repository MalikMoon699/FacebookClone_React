import React, { useState } from "react";
import FriendsMain from "./FriendsMain";
import FriendLeftbar from "./FriendLeftbar";
import CloseIcon from "@mui/icons-material/Close";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { IconButton,Modal } from "@mui/material";

const Friends = () => {
  const [friend, setFriend] = useState(false);


  return (
    <>
      <Modal open={friend} onClose={() => setFriend(false)}>
        <div className="modalPop popwidth">
          <div className="modalHeading">
            Friends
            <IconButton onClick={() => setFriend(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <FriendLeftbar />
        </div>
      </Modal>

      <div className="flex">
        <div onClick={() => setFriend(true)} className="handleLeft">
          <GroupAddIcon />
        </div>
        <div className="leftSideContainer width-65">
          <FriendLeftbar />
        </div>
        <FriendsMain />
      </div>
    </>
  );
};

export default Friends;
