import React, { useState } from "react";

const Notification = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="notificationMain">
      <div className="flex">
        <button
          className={`notificationbtn ${
            activeTab === "all" ? "notificationActive" : ""
          }`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`notificationbtn ${
            activeTab === "unread" ? "notificationActive" : ""
          }`}
          onClick={() => setActiveTab("unread")}
        >
          Unread
        </button>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WQzqeR1gBUjOnn2E9RzN0FPq1kTqfYUE6A&s"
        alt=""
      />
      <h4>You have no notifications</h4>
    </div>
  );
};

export default Notification;
