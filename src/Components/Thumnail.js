import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DivImg = styled.div`
  display: inline-block;
  width: 35%;
  img {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 50%;
  }
`;

const Thumnail = ({ project }) => {
  return (
    <DivImg>
      {project === "react_challenge" ? (
        <img src={require(`../images/react_port.jpg`).default} alt={project} />
      ) : project === "js_challenge" ? (
        <img src={require(`../images/js_port.jpg`).default} alt={project} />
      ) : project === "youtube" ? (
        <img src={require(`../images/youtube.jpg`).default} alt={project} />
      ) : project === "insta" ? (
        <img src={require(`../images/insta.jpg`).default} alt={project} />
      ) : project === "uber" ? (
        <img src={require(`../images/eats.jpg`).default} alt={project} />
      ) : project === "tvcf" ? (
        <img src={require(`../images/tv.jpg`).default} alt={project} />
      ) : project === "worksheetmaker" ? (
        <img src={require(`../images/worksheet.jpg`).default} alt={project} />
      ) : project === "qoh" ? (
        <img src={require(`../images/qos.jpg`).default} alt={project} />
      ) : project === "webview" ? (
        <img
          src={require(`../images/webview/webview_06.jpg`).default}
          alt={project}
        />
      ) : project === "homepage" ? (
        <img src={require(`../images/homepage.png`).default} alt={project} />
      ) : project === "web-project" ? (
        <img
          src={require(`../images/web_project/web_01.jpg`).default}
          alt={project}
        />
      ) : project === "cms" ? (
        <img
          src={require(`../images/cms_capture/l_1_1.jpg`).default}
          alt={project}
        />
      ) : project === "typescript" ? (
        <img
          src={require(`../images/typescript_thumbnail-min.jpg`).default}
          alt={project}
        />
      ) : project === "network" ? (
        <img
          src={require(`../images/network/network-01.png`).default}
          alt={project}
        />
      ) : project === "tvcPoc" ? (
        <img
          src={require(`../images/network/network-02.png`).default}
          alt={project}
        />
      ) : project === "ntb" ? (
        <img src={require(`../images/ntb.png`).default} alt={project} />
      ) : (
        <img src={require(`../images/no_img.png`).default} alt={project} />
      )}
    </DivImg>
  );
};

Thumnail.propTypes = {
  project: PropTypes.string.isRequired,
};

export default Thumnail;
