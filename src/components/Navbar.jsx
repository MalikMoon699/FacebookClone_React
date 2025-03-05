import { Avatar, IconButton, Modal } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/style.css";
import {
  Search as SearchIcon,
  Home as HomeIcon,
  Group as GroupIcon,
  Groups3 as Groups3Icon,
  Apps as AppsIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LeftSidebar from "./LeftSidebar";
import Messanger from "./Messanger";
import Notification from "./Notification";

const Navbar = () => {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [messanger, setMessanger] = useState(false);
  const [notification, setNotification] = useState(false);
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const updateUserData = () => {
      const storedUser = JSON.parse(localStorage.getItem("Nowuser"));
      setUserName(storedUser?.userName || "Guest");

      const storedImage = localStorage.getItem("profileImage");
      setImage(storedImage || "");
    };

    updateUserData();

    const handleStorageChange = (event) => {
      if (event.key === "profileImage" || event.key === "Nowuser") {
        updateUserData();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const newImage = reader.result;
      setImage(newImage);
      localStorage.setItem("profileImage", newImage);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    localStorage.removeItem("profileImage");
    setImage("");
  };

  const handleLogout = () => {
    localStorage.removeItem("Nowuser");
    window.location.reload();
  };

  return (
    <>
      <Modal open={notification} onClose={() => setNotification(false)}>
        <div className="modalPop popwidth">
          <div className="modalHeading">
            Notifications
            <IconButton onClick={() => setNotification(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <Notification />
        </div>
      </Modal>
      <Modal open={messanger} onClose={() => setMessanger(false)}>
        <div className="modalPop popwidth">
          <div className="modalHeading">
            Chats
            <IconButton onClick={() => setMessanger(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <Messanger />
        </div>
      </Modal>
      <Modal open={menu} onClose={() => setMenu(false)}>
        <div className="modalPop popwidth">
          <div className="modalHeading">
            Menu
            <IconButton onClick={() => setMenu(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <LeftSidebar />
        </div>
      </Modal>
      <Modal open={search} onClose={() => setSearch(false)}>
        <div className="modalPopSearch popwidth">
          <div className="flex">
            <IconButton removePop onClick={() => setSearch(false)}>
              <ArrowBackIcon />
            </IconButton>
            <input
              className="searchInput"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
          <h3>No recent searches</h3>
        </div>
      </Modal>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modalPop popwidth">
          <div className="modalHeading border">
            Profile
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div
            onClick={() => inputRef.current.click()}
            className="modalHeaderTop up"
          >
            {image ? <img src={image} alt="Profile" /> : <Avatar />}
            <input
              type="file"
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <h5>{userName}</h5>
          </div>
          <div className="submitContainer">
            <button className="postSubmit" onClick={handleRemove}>
              Remove
            </button>
          </div>
          <div className="addGroup" onClick={handleLogout} role="button">
            <LogoutIcon />
            <h2>Log Out</h2>
          </div>
        </div>
      </Modal>

      <nav>
        <ul>
          <li className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
              alt="Facebook Logo"
            />
          </li>
          <li>
            <span onClick={() => setSearch(true)} className="searchInput searchInput-1">
              <SearchIcon />
              <input type="text" placeholder="Search Facebook" />
            </span>
          </li>
        </ul>
        <ul className="centerIcon">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <HomeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/friends"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <GroupIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/group"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Groups3Icon />
            </NavLink>
          </li>
        </ul>
        <ul className="endIcon">
          <li className="searchInput">
            <NavLink
              to="/friends"
              className={({ isActive }) => (isActive ? "active" : "deActive")}
            >
              Find friends
            </NavLink>
          </li>
          <li className="searchInput" onClick={() => setMenu(true)}>
            <AppsIcon />
          </li>
          <li className="searchInput" onClick={() => setMessanger(true)}>
            <MessageIcon />
          </li>
          <li className="searchInput" onClick={() => setNotification(true)}>
            <NotificationsIcon />
          </li>
          <li onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
            {image ? (
              <img
                src={image}
                alt="Profile"
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <PersonIcon />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
