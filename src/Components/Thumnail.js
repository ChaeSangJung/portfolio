import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DivImg = styled.div`
    display: inline-block;
    width: 35%;
    img {
        width: 100%;
    }
`;

const Thumnail = ({project}) => {
    return (
        <DivImg>
            {project === "react_challenge" 
                ? <img src={require(`../images/react_port.jpg`).default} alt={project} /> 
                : project === "js_challenge" ? <img src={require(`../images/js_port.jpg`).default} alt={project} /> 
                : project === "youtube" ? <img src={require(`../images/youtube.jpg`).default} alt={project} /> 
                : project === "insta" ? <img src={require(`../images/insta.jpg`).default} alt={project} /> 
                : project === "uber" ? <img src={require(`../images/eats.jpg`).default} alt={project} /> 
                : project === "tvcf" ? <img src={require(`../images/js_port.jpg`).default} alt={project} /> 
                : project === "worksheetmaker" ? <img src={require(`../images/worksheet.jpg`).default} alt={project} /> 
                : project === "qoh" ? <img src={require(`../images/qos.jpg`).default} alt={project} /> 
                : <img src={require(`../images/no_img.png`).default} alt={project} />
            }
        </DivImg>
    )
}

Thumnail.propTypes = {
    project : PropTypes.string.isRequired
}

export default Thumnail;