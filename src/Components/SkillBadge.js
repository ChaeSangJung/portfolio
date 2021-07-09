import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SkillElm = styled.div`
    display: inline-block;
    padding: 5px 7px 5px;
    margin-right: 9px;
    margin-top: 5px;
    font-family: NanumSquare;
    font-weight: 800;
    font-size: 14px;
    color: ${
        (props)=>(
            props.bg === "react" ? "#222" 
            :props.bg === "es6" ? "#343433"
            :props.bg === "styled-component" ? "#f9f7f7"
            :props.bg === "typescript" ? "#fff"
            :props.bg === "HTML" ? "#ebebeb"
            :props.bg === "css" ? "#fff"
            :props.bg === "python" ? "#ffe264"
            :props.bg === "nodeJs" ? "#7ba543"
            :props.bg === "pug" ? "#efcba3"
            :props.bg === "mongo" ? "#499d4a"
            :props.bg === "graphQL" ? "#fff"
            :props.bg === "nest" ? "#fff"
            :props.bg === "jest" ? "#fff"
            :props.bg === "jQuery" ? "#fff"
            : "#fff"
        )
    };
    background-color: ${
        (props)=>(
            props.bg === "react" ? "#61dafb" 
            :props.bg === "es6" ? "#f6df59"
            :props.bg === "styled-component" ? "#c181c3"
            :props.bg === "typescript" ? "#007acc"
            :props.bg === "HTML" ? "#d35835"
            :props.bg === "css" ? "#3871b5"
            :props.bg === "python" ? "#346f9f"
            :props.bg === "nodeJs" ? "#f3f3f3"
            :props.bg === "pug" ? "#543229"
            :props.bg === "mongo" ? "#3f2c1b"
            :props.bg === "graphQL" ? "#d345a7"
            :props.bg === "nest" ? "#e0234e"
            :props.bg === "jest" ? "#bd5029"
            :props.bg === "jQuery" ? "#0769ad"
            :"#333"
            )
    };
`

const SkillBadge = ({skill}) => {
    return (
        <SkillElm bg={skill}>
            {skill}
        </SkillElm>
    )
}

SkillBadge.propTypes = {
    skill : PropTypes.string
}

export default SkillBadge;