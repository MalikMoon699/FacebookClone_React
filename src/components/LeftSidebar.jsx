import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SidebarOptions from "./SidebarOptions.jsx";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Footer from "./Footer.jsx";
import PersonIcon from "@mui/icons-material/Person";

const Sidebar = () => {
  const [userName, setUserName] = useState("Guest");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);

  const Togglebar = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    const updateUserData = () => {
      const storedUser = JSON.parse(localStorage.getItem("Nowuser"));
      setUserName(storedUser?.userName || "Guest");

      const storedImage = localStorage.getItem("profileImage");
      setImage(storedImage || "");
    };

    updateUserData();

    window.addEventListener("storage", updateUserData);
    return () => window.removeEventListener("storage", updateUserData);
  }, []);

  return (
    <>
      <SidebarOptions
        src={image || null}
        Icon={!image ? PersonIcon : null}
        title={userName}
      />
      <NavLink
        to="/friends"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <SidebarOptions
          src="https://img.icons8.com/?size=512w&id=mtro6UfgvCYA&format=png"
          title="Friends"
        />
      </NavLink>
      <NavLink
        to="/group"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <SidebarOptions
          src="https://img.icons8.com/?size=512w&id=qdiD1wZOvDsv&format=png"
          title="Groups"
        />
      </NavLink>
      <SidebarOptions
        src="https://img.icons8.com/?size=512&id=uLWV5A9vXIPu&format=png"
        title="Welcome"
      />
      <SidebarOptions
        src="https://img.icons8.com/?size=512w&id=RXpmH2wRty1i&format=png"
        title="Memories"
      />
      <SidebarOptions
        src="https://img.icons8.com/?size=512&id=25157&format=png"
        title="Saved"
      />
      <SidebarOptions
        src="https://img.icons8.com/?size=512w&id=OCts8o0LpHho&format=png"
        title="Videos"
      />
      {show && (
        <div>
          <SidebarOptions
            src="https://img.icons8.com/?size=512w&id=77121&format=png"
            title="Marketplace"
          />
          <SidebarOptions
            src="https://static.xx.fbcdn.net/rsrc.php/v4/yF/r/kD5Sv0isIPs.png"
            title="Feeds"
          />
          <SidebarOptions
            src="https://img.icons8.com/?size=512w&id=0KyPfkIkeia7&format=png"
            title="Events"
          />
          <SidebarOptions
            src="https://static.xx.fbcdn.net/rsrc.php/v4/yC/r/y5w6W9F6KEL.png"
            title="Ads Manager"
          />
        </div>
      )}
      <div className="siderow">
        <button className="searchBtn flex btnNormal"  onClick={() => Togglebar()}>
          <span>
            {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </span>{" "}
          {show ? "See Less" : "See More"}
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Sidebar;
