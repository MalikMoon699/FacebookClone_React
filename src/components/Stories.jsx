import React, { useState, useEffect } from "react";
import { IconButton, Modal, Box, Button } from "@mui/material";
import Profile from "./Profile";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";

const Stories = ({ stories = [], setStories }) => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [userName, setUserName] = useState("");
  const [storyRemove, setStoryRemove] = useState(false);
  const [storyFull, setStoryFull] = useState(false);
  const [selectedStoryId, setSelectedStoryId] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Nowuser"));
    if (storedUser && storedUser.userName) {
      setUserName(storedUser.userName);
    }
  }, []);

  const handleRemoveStory = () => {
    if (selectedStoryId !== null) {
      const updatedStories = stories.filter(
        (story) => story.id !== selectedStoryId
      );
      setStories(updatedStories);
      localStorage.setItem("stories", JSON.stringify(updatedStories));
      handleClose();
    }
  };

  const handleOpen = (event, storyId) => {
    event.stopPropagation();
    setSelectedStoryId(storyId);
    setStoryRemove(true);
  };

  const handleClose = () => {
    setStoryRemove(false);
  };

  const handleStoryClose = () => {
    setStoryFull(false);
  };

  const handleStoryOpen = (story) => {
    setSelectedStory(story);
    setStoryFull(true);
  };

  return (
    <>
      <Modal open={storyRemove} onClose={handleStoryClose}>
        <Box className="removePop">
          <h3>Are you sure you want to remove this story?</h3>
          <Button variant="contained" color="error" onClick={handleRemoveStory}>
            Remove Story
          </Button>
          <Button variant="outlined" onClick={handleClose} sx={{ ml: 2 }}>
            Cancel
          </Button>
        </Box>
      </Modal>

      <Modal open={storyFull} onClose={() => setStoryFull(false)}>
        <Box className="storyModal modalPop popwidth">
          <div className="modalHeading">
            Story
            <IconButton onClick={() => setStoryFull(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="divStory">
            {selectedStory && (
              <>
                <h1>{selectedStory.title}</h1>
                <p>{selectedStory.content}</p>
                {selectedStory.image && (
                  <img
                    src={selectedStory.image}
                    alt="story"
                    className="divStoryImg"
                  />
                )}
              </>
            )}
          </div>
        </Box>
      </Modal>

      {stories.map((story) => (
        <div
          key={story.id}
          className="post storySender"
          onClick={() => handleStoryOpen(story)}
        >
          <div className="postTop">
            <div className="left-post left-post-1">
              <Profile />
              <div className="text text-1">
                <MoreHorizIcon
                  onClick={(event) => handleOpen(event, story.id)}
                />
                <h1>{userName || "Guest"}</h1>
              </div>
            </div>
          </div>
          <div className="storyUpload">
            {story.title && <h3>{story.title}</h3>}
            <div className="para">
              <p>{story.content}</p>
            </div>
            {story.image && (
              <img src={story.image} alt="story" className="w-full" />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Stories;
