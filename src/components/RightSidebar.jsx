import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, IconButton, Modal } from "@mui/material";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Profile from "./Profile";
import EditNoteIcon from "@mui/icons-material/EditNote";

const RightSidebar = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Nowuser"));
    if (storedUser && storedUser.userName) {
      setUserName(storedUser.userName);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modalPop popwidth">
          <div className="modalHeading border">
            New message
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="modalHeaderCenter">
            <span>To : </span>
            <input></input>
          </div>
          <div className="modalHeaderTop">
            <Profile />
            <h5>{userName || "Guest"}</h5>
          </div>
        </div>
      </Modal>
      <div className="rightSideContainer">
        <div className="Upper">
          <h3>Group chats</h3>
          <div className="upperAddGroup" onClick={handleOpen}>
            <div className="addGroup">
              <AddIcon className="searchInput addBtn" />
              <h2>Create Group Chat</h2>
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleOpen}>
        <div className="addGroup addGroup-2 ">
          <EditNoteIcon />
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
