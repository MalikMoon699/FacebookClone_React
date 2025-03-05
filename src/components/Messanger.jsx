import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const Messanger = () => {
  return (
    <>
      <div className="searchInput margin">
        <SearchIcon />
        <input type="text" placeholder="Search Messenger" />
      </div>
      <div className="MessangerImg">
        <img
          src="https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/307535831_776352823703471_3755300599073324771_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mI8l6BFUamIQ7kNvgEEHcgS&_nc_oc=Adh1olAUS_Bo6ALYqzxiBde48jGbv2Ynw25cJKHhBa26xcQcR_RFjvfN7YA2KlYj3P8&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=A9QwLExb32Z6nehGs4eaa68&oh=00_AYB8k4TDZyTDYkgWewy0eE1hAKuwKspKVjR96Hr0DfDW7w&oe=67C5E187"
          alt=""
        />
        <h5>No messages</h5>
        <h6>New messages will appear here.</h6>
      </div>
      <div className="messangerbtn">
        <IconButton
          className="messangerbtn"
          component="a"
          href="https://www.messenger.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See all in Messenger
        </IconButton>
      </div>
    </>
  );
};

export default Messanger;