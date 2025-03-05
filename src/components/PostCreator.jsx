import { IconButton, Modal } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import Profile from "./Profile";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";


const PostCreator = ({ addPost, setPosts }) => {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
    const [imgSize, setImgSize] = useState(false);
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [selected, setSelected] = useState("🙂");
  const [showPicker, setShowPicker] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim() && !image.trim()) return;

    const newPost = {
      id: Date.now(),
      content,
      image,
      timestamp: new Date().toISOString(),
    };
    addPost(newPost);
    setContent("");
    inputRef.current.value = "";
    setImage("");
    inputRef.current.value = "";
    handleClose();
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Nowuser"));
    if (storedUser && storedUser.userName) {
      setUserName(storedUser.userName);
    }
  }, []);

  const toggleEmoji = () => {
    setShowPicker((prev) => !prev);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleImageFile = () => {
    inputRef.current.click();
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

  const clear = () => {
    localStorage.removeItem("posts");
    setPosts([]);
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
      <Modal open={showPicker} onClose={toggleEmoji}>
        <div className="modalPop popheight popwidth">
          <div className="modalHeading">
            Create Feeling post
            <IconButton onClick={toggleEmoji}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="block">
            <Picker
              data={data}
              theme="light"
              Style={{ width: "33vw", borderRadius: "0" }}
              onEmojiSelect={(d) => {
                setSelected(d.native);
                setContent((prevContent) => prevContent + d.native);
              }}
            />
          </div>
        </div>
      </Modal>
      <Modal open={open} onClose={handleClose}>
        <div className="modalPop popheight  popwidth">
          <div className="modalHeading">
            Create Post
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="modalHeaderTop">
            <Profile />
            <h5>{userName || "Guest"}</h5>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder={`What's on your mind, ${userName || "Guest"}?`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {image && <img key={image} src={image} alt="Preview" />}
            <div className="center2">
              <div className="modalHeaderBottom">
                <h5>Add to your post</h5>
                <div>
                  <IconButton onClick={handleImageFile}>
                    <InsertPhotoIcon style={{ color: "#23a823" }} />
                  </IconButton>
                  <IconButton onClick={toggleEmoji}>
                    <div className="selected">{selected}</div>
                  </IconButton>
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  <div></div>
                </div>
              </div>
            </div>

            <div className="submitContainer">
              <input type="submit" className="postSubmit" value="Post" />
            </div>
          </form>
        </div>
      </Modal>

      <div className="messageSender">
        <div className="messageSender_top">
          <Profile />
          <form className="input">
            <input
              type="text"
              placeholder={`What's on your mind, ${userName || "Guest"}?`}
              onClick={handleOpen}
            />
          </form>
        </div>

        <div className="messageSender_bottom">
          <div onClick={handleOpen} className="messageOptions messageOptions-1">
            <CreateIcon />
            <p>Text</p>
          </div>
          <div onClick={handleOpen} className="messageOptions messageOptions-2">
            <InsertPhotoIcon />
            <p>Photo/Video</p>
          </div>
          <div
            onClick={toggleEmoji}
            className="messageOptions messageOptions-3"
          >
            <InsertEmoticonIcon />
            <p>Feelings</p>
          </div>
        </div>
      </div>
      <IconButton onClick={clear}>Clear All Posts</IconButton>
    </>
  );
};

export default PostCreator;