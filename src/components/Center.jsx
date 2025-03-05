import React, { useState } from "react";
import PostCreate from "./PostCreate";
import SearchIcon from "@mui/icons-material/Search";
import Stories from "./Stories";
import StoryCreate from "./StoryCreate";

const Center = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = () => {
    setSearchClicked(true);
  };

  return (
    <div className="centerContainer">
      <div className="searchInput width">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Story & Posts"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setSearchClicked(false); 
          }}
        />
        <button className="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {searchClicked ? (
        <h3>Not found...</h3>
      ) : searchValue.length > 0 ? null : (
        <>
          <StoryCreate />
          <Stories />
          <PostCreate />
        </>
      )}
    </div>
  );
};

export default Center;
