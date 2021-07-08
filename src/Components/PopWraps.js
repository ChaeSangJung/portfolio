import React from "react";
import styled from "styled-components";

const Dim = styled.div`
    z-index: 10;
    position: fixed;
    display: block;
    width: 100%;
    height: 100vh;
    padding: 50px 0px;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
`;
const ListsMore = styled.ul`
    overflow-y: auto;
    width: 800px;
    max-height: 100%;
    margin: 0px auto;
    background: rgb(38, 38, 30);
    box-sizing: border-box;
    &::-webkit-scrollbar {
        width: 7px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #111110;
    }
    &::-webkit-scrollbar-track {
        background-color: #383837;
    }
`;

const PopWraps = ({children}) => {
    return(
        <Dim className="dim">
            <ListsMore>
                {children}
            </ListsMore>
        </Dim>
    )
}

export default PopWraps;


