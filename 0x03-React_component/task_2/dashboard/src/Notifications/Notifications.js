import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

// function Notifications({ displayDrawer, listNotifications })
class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.displayDrawer ? (
          <div>
            <div className="menuItem">
              <p>Your notifications</p>
            </div>

            <div className="Notifications">
              <button
                style={{
                  color: "#3a3a3a",
                  fontWeight: "bold",
                  background: "none",
                  border: "none",
                  fontSize: "10px",
                  position: "absolute",
                  right: "1rem",
                  top: "1rem",
                  cursor: "pointer",
                }}
                aria-label="Close"
                onClick={console.log("Close button has been clicked")}
              >
                <img src={closeIcon} alt="closeIcon" width="10px" />
              </button>
              <p>Here is the list of notifications</p>
              <ul>
                {this.props.listNotifications &&
                this.props.listNotifications.length > 0 ? (
                  this.props.listNotifications.map(
                    ({ id, value, type, html }) => (
                      <NotificationItem
                        key={id}
                        markAsRead={this.markAsRead}
                        value={value}
                        type={type}
                        html={html}
                      />
                    )
                  )
                ) : (
                  <NotificationItem value="No new notification for now" />
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: "false",
  listNotifications: [],
};

export default Notifications;
