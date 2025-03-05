import React, { useState } from "react";
import { IconButton, Modal, Box, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const PostClear = ({ postId, onRemove }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const remove = () => {
    onRemove(postId);
    handleClose();
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box className="removePop">
          <h3>Are you sure you want to remove this post?</h3>
          <Button variant="contained" color="error" onClick={remove}>
            Remove Post
          </Button>
          <Button variant="outlined" onClick={handleClose} sx={{ ml: 2 }}>
            Cancel
          </Button>
        </Box>
      </Modal>
      <IconButton onClick={handleOpen}>
        <MoreHorizIcon />
      </IconButton>
    </>
  );
};

export default PostClear;
