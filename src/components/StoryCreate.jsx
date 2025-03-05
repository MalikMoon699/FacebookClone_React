import { useState, useEffect } from "react";
import StoryCreator from "./StoryCreator";
import Stories from "./Stories";

const StoryCreate = () => {
  const [stories, setStories] = useState(() => {
    return JSON.parse(localStorage.getItem("stories")) || [];
  });

  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  const addStory = (newStory) => {
    setStories((prevStories) => [newStory, ...prevStories]);
  };

  return (
    <div className="storyReels">
      <StoryCreator addStory={addStory} setStories={setStories} />
      <Stories stories={stories} setStories={setStories} />
    </div>
  );
};

export default StoryCreate;
