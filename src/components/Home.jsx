import React from "react";
import Center from "./Center";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="leftSideContainer">
          <LeftSidebar />
        </div>
        <Center />
        <RightSidebar />
      </div>
    </>
  );
};

export default Home;
