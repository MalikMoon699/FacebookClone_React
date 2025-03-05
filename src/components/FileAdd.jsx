import React from "react";
import { useRef } from "react";
import { IconButton } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const FileAdd = () => {
  const inputRef = useRef(null);
  const handleImageFile = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("profile", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <IconButton onClick={handleImageFile}>
        <InsertPhotoIcon style={{ color: "#23a823" }} />
      </IconButton>
      <input
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </>
  );
};

export default FileAdd;
