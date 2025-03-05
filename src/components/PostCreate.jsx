import { useState, useEffect } from "react";
import PostCreator from "./PostCreator";
import Posts from "./Posts";

const PostCreate = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const addPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <>
      <PostCreator addPost={addPost} setPosts={setPosts} />
      <Posts posts={posts} setPosts={setPosts} />
    </>
  );
};

export default PostCreate;
