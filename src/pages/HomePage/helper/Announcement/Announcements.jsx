import React from "react";
import styled from "styled-components";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import './Announcements.scss';
// const Container = styled.div``;

const Announcements = () => {
  return (
    <div className="container">
      <NewReleasesOutlinedIcon
        style={{
          marginRight: "15px",
        }}
      />
      Super Deal Buy Two Neon Signs & Get Free Animated Sign From Us.{" "}
    </div>
  );
};

export default Announcements;
