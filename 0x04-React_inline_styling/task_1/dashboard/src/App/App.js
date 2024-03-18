import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppBody: {
    fontFamily: "Arial, Helvetica, sans-serif",
    minHeight: "45vh",
    fontSize: "1rem",
    height: "100vh",
    maxWidth: "100vw",
    padding: "1rem",
  },

  flexHeader: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "3px solid #e0354b",
    height: "15rem",
    flexWrap: "wrap-reverse",
  },

  "App-footer": {
    borderTop: "3px solid #e0354b",
    fontSize: "1rem",
    padding: "1rem",
    textAlign: "center",
    fontStyle: "italic",
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      // console.log("Logging you out");
      this.props.logOut();
    }
  };

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  render() {
    return (
      <React.Fragment>
        <div className={css(styles.AppBody)}>
          <div className={css(styles.flexHeader)}>
            <Notifications
              displayDrawer
              listNotifications={this.listNotifications}
            />
            <Header />
          </div>
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis at tempora odio, necessitatibus repudiandae
              reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
              ipsa iste vero dolor voluptates.
            </p>
          </BodySection>
          <Footer className={css(styles["App-footer"])} />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
