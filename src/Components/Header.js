import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.div`
    width: 100%;
    text-align: center;
    background-color: #f6df59;
`;
const TextHeader = styled.p`
    padding: 45px 0 45px;
    font-family: 'NanumSquare';
    font-size: 24px;
    font-weight: 700;
    color: #333;
    text-align: center;
`;

const Header = () => {
    return (
        <HeaderWrap>
            <TextHeader>Chae Sang, Jung's Portfolio</TextHeader>
        </HeaderWrap>
    )
}

export default Header;