import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";

export default function Notifications() {
  const styleBotton = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    ariaLabel: "close",
    border: "none",
    backgroundColor: "inherit",
    cursor: "pointer",
  };

  function handleClick(params) {
    console.log("Close button has been clicked");
  }
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={styleBotton} onClick={handleClick} aria-label="Close">
        <img src={closeIcon} alt="Close button" width="15px" />
      </button>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
