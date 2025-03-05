import React from "react";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";

const Profile = () => {
  const [image, setImage] = useState("");

  useEffect(() => {

    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);
  

  return (
    <>
      <Avatar src={image || ""}>{!image && <PersonIcon />}</Avatar>
    </>
  );
};

export default Profile;
