import { IconButton, Modal } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CloseIcon from "@mui/icons-material/Close";
import Profile from "./Profile";
import AddIcon from "@mui/icons-material/Add";
import FontDownloadIcon from "@mui/icons-material/FontDownload";

const StoryCreator = ({ addStory, setStories }) => {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
    const [imgSize, setImgSize] = useState(false);
  const [openImg, setOpenImg] = useState(false);
  const [openText, setOpenText] = useState(false);
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Nowuser"));
    if (storedUser?.userName) {
      setUserName(storedUser.userName);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim() && !image.trim()) return;

    const newStory = {
      id: Date.now(),
      content,
      image,
      timestamp: new Date().toISOString(),
    };
    addStory(newStory);
    setContent("");
    setImage("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    handleClose();
    handleCloseImg();
    handleCloseText();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenImg = () => setOpenImg(true);
  const handleCloseImg = () => setOpenImg(false);
  const handleOpenText = () => setOpenText(true);
  const handleCloseText = () => setOpenText(false);

  const handleImageFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
     if (!file) return;

     if (file.size > 1024 * 1024) {
       setImgSize(true);
       return;
     }
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
      <Modal open={imgSize} onClose={() => setImgSize(false)}>
        <div className="modalPop popheight popwidth">
          <div className="modalHeading">
            Error
            <IconButton onClick={() => setImgSize(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div style={{ padding: "50px 10px" }}>
            <h2>Image size is up to 1000KB. Please choose another image.</h2>
          </div>
        </div>
      </Modal>
      
      <Modal open={openImg} onClose={handleCloseImg}>
        <div className="modalPop popheight popwidth">
          <div className="modalHeading">
            Create Photo Story
            <IconButton onClick={handleCloseImg}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="modalHeaderTop">
            <Profile />
            <h5>{userName || "Guest"}</h5>
          </div>

          <form onSubmit={handleSubmit}>
            {image && <img key={image} src={image} alt="Preview" />}
            <div className="submitContainer">
              <input type="submit" className="postSubmit" value="Post" />
            </div>
          </form>

          <div className="cardList">
            <div className="modalHeaderBottom">
              <h5>Add to your post</h5>
              <div>
                <IconButton onClick={handleImageFile}>
                  <InsertPhotoIcon style={{ color: "#23a823" }} />
                </IconButton>
                <input
                  type="file"
                  ref={inputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal open={openText} onClose={handleCloseText}>
        <div className="modalPop popheight popwidth">
          <div className="modalHeading">
            Create Text Story
            <IconButton onClick={handleCloseText}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="modalHeaderTop">
            <Profile />
            <h5>{userName || "Guest"}</h5>
          </div>

          <form onSubmit={handleSubmit}>
            <textarea
              maxLength={100}
              placeholder={`What's on your mind, ${userName || "Guest"}?`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="submitContainer">
              <input type="submit" className="postSubmit" value="Post" />
            </div>
          </form>
        </div>
      </Modal>

      <Modal open={open} onClose={handleClose}>
        <div className="modalPop popheight popwidth">
          <div className="modalHeading">
            Create Story
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="modalHeaderTop">
            <Profile />
            <h5>{userName || "Guest"}</h5>
          </div>

          <div className="cardList">
            <div onClick={handleOpenImg} className="card gradient-1">
              <InsertPhotoIcon />
              <h2>Create a photo story</h2>
            </div>

            <div onClick={handleOpenText} className="card gradient-2">
              <FontDownloadIcon />
              <h2>Create a text story</h2>
            </div>
          </div>
        </div>
      </Modal>

      <div className="storyCreator" onClick={handleOpen}>
        <Profile />
        <AddIcon />
        <p>Create story</p>
      </div>
    </>
  );
};

export default StoryCreator;
