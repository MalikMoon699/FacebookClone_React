import React, { useState, useEffect } from "react";
import PublicIcon from "@mui/icons-material/Public";
import Profile from "./Profile";
import PostClear from "./PostClear";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Modal, IconButton, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  WhatsappIcon,
} from "react-share";

const Posts = ({ posts, setPosts }) => {
  const [userName, setUserName] = useState("");
  const [open, setOpen] = useState(false);
  const [openComment, setComment] = useState(false);
  const [commentRemove, setCommentRemove] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState("");
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);

  const toggleModal = () => setOpen((prev) => !prev);
  const toggleCommentRemove = () => setCommentRemove((prev) => !prev);
  const toggleComment = () => setComment((prev) => !prev);

  const handleRemoveComment = () => {
    if (selectedPostId !== null && selectedCommentIndex !== null) {
      const updatedComments = { ...comments };
      updatedComments[selectedPostId].splice(selectedCommentIndex, 1);
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setCommentRemove(false);
    }
  };

  const openCommentModal = (postId) => {
    setSelectedPostId(postId);
    setComment(true);
  };

  const handleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Nowuser"));
    if (storedUser && storedUser.userName) {
      setUserName(storedUser.userName);
    }
    const storedComments = JSON.parse(localStorage.getItem("comments")) || {};
    setComments(storedComments);
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim() || selectedPostId === null) return;

    const newComments = {
      ...comments,
      [selectedPostId]: [...(comments[selectedPostId] || []), commentText],
    };

    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
    setCommentText("");
  };

  const handleRemovePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  if (!posts.length) return <p>No posts available</p>;

  return (
    <>
      <Modal open={commentRemove} onClose={toggleCommentRemove}>
        <Box className="removePop">
          <h3>Are you sure you want to remove this Comment?</h3>
          <Button
            variant="contained"
            color="error"
            onClick={handleRemoveComment}
          >
            Remove comment
          </Button>
          <Button
            variant="outlined"
            onClick={toggleCommentRemove}
            sx={{ ml: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>

      <Modal open={openComment} onClose={toggleComment}>
        <div className="modalPop popheight popwidth">
          <div className="modalHeading">
            Post Comments
            <IconButton onClick={toggleComment}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="comments-section ">
            <div className="comments-space">
              {(comments[selectedPostId] || []).map((comment, index) => (
                <div key={index} className="modalHeaderTop">
                  <Profile />
                  <h5>{userName || "Guest"}</h5>
                  <div className="comments">
                    <p className="comment-text">{comment}</p>
                  </div>
                  <IconButton className="buttonComment">
                    <MoreHorizIcon
                      onClick={() => {
                        setSelectedCommentIndex(index);
                        toggleCommentRemove();
                      }}
                    />
                  </IconButton>
                </div>
              ))}
            </div>
          </div>

          <div className="modalHeaderTop positionSticky">
            <Profile />
            <h5>{userName || "Guest"}</h5>
            <form
              className="searchInput margin-0 width"
              onSubmit={handleCommentSubmit}
            >
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder={`What's on your mind, ${userName || "Guest"}?`}
              />
              <button type="submit" className="searchBtn">
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </Modal>

      <Modal open={open} onClose={toggleModal}>
        <div className="modalPop popheight popwidth">
          <div className="modalHeading">
            Share Post
            <IconButton onClick={toggleModal}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="modalHeaderTop">
            <Profile />
            <h5>{userName || "Guest"}</h5>
          </div>

          <div className="share-Modal">
            <EmailShareButton url="mailto:?body=Check this out: https://mail.google.com">
              <EmailIcon />
            </EmailShareButton>

            <FacebookShareButton url="https://www.facebook.com/sharer/sharer.php?u=https://your-post-link.com">
              <FacebookIcon />
            </FacebookShareButton>

            <FacebookMessengerShareButton url="https://www.messenger.com/t/?link=https://your-post-link.com">
              <FacebookMessengerIcon />
            </FacebookMessengerShareButton>

            <WhatsappShareButton url="https://api.whatsapp.com/send?text=Check%20this%20out:%20https://your-post-link.com">
              <WhatsappIcon />
            </WhatsappShareButton>
          </div>
        </div>
      </Modal>

      {posts.map((post) => (
        <div key={post.id} className="post messageSender">
          <div className="postTop">
            <div className="left-post">
              <Profile />
              <div className="text">
                <h1>{userName || "Guest"}</h1>
                <span className="small-text">
                  {post.timestamp
                    ? new Date(post.timestamp).toLocaleTimeString()
                    : "Just now"}
                </span>
                {" · "}
                <PublicIcon />
              </div>
            </div>
            <div>
              <PostClear postId={post.id} onRemove={handleRemovePost} />
            </div>
          </div>
          <div className="postCenter">
            {post.title && <h3>{post.title}</h3>}
            <p>{post.content}</p>
            {post.image && (
              <img src={post.image} alt="Post" className="w-full" />
            )}
          </div>
          <div className="postBottom">
            <div
              className={`sameActive like ${
                likedPosts[post.id] ? "likeActive" : ""
              }`}
              onClick={() => handleLike(post.id)}
            >
              <ThumbUpAltIcon className="like-icon" />
              <p>Like</p>
            </div>

            <div
              onClick={() => openCommentModal(post.id)}
              className="sameActive comment"
            >
              <ChatBubbleOutlineIcon />
              <p>Comments</p>
            </div>
            <div onClick={toggleModal} className="sameActive share">
              <ShareIcon />
              <p>Share</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
