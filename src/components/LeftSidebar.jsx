import React, { useState, useEffect } from "react";
import SidebarOptions from "./SidebarOptions.jsx";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Footer from "./Footer.jsx";
import PersonIcon from "@mui/icons-material/Person";

const Sidebar = () => {
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);

  const Togglebar = () => {
    setShow((prev) => !prev);
  };
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Nowuser"));
    if (storedUser && storedUser.userName) {
      setUserName(storedUser.userName);
    }

    const updateUserData = () => {
      const storedUser = JSON.parse(localStorage.getItem("Nowuser"));
      if (storedUser && storedUser.userName) {
        setUserName(storedUser.userName);
      }

      const storedImage = localStorage.getItem("profileImage");
      if (storedImage) {
        setImage(storedImage);
      }
    };


    const handleStorageChange = (event) => {
      if (event.key === "profileImage" || event.key === "Nowuser") {
        updateUserData();
      }
    };

    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setImage(storedImage);
    }
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      <SidebarOptions
        src={image || null}
        Icon={!image ? PersonIcon : null}
        title={userName || "Guest"}
      />
      <SidebarOptions
        src="https://img.icons8.com/?size=512w&id=mtro6UfgvCYA&format=png"
        title="Friends"
      />
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
        src="https://img.icons8.com/?size=512w&id=qdiD1wZOvDsv&format=png"
        title="Groups"
      />
      <SidebarOptions
        src="https://img.icons8.com/?size=512w&id=OCts8o0LpHho&format=png"
        title="Videos"
      />
      <div className={show ? "none" : "block"}>
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
      <SidebarOptions
        onClick={Togglebar}
        Icon={KeyboardArrowDownIcon}
        title="See More"
      />

      <Footer />
    </>
  );
};

export default Sidebar;
