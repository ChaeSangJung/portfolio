import React from "react";
import PopText from "Components/PopText";
import styled from "styled-components";

const ItemMore = styled.li`
    padding: 9px 5px 9px;
    box-sizing: border-box;
    font-size: 0;
    border-bottom: 1px solid #151515;
    text-align: left;
`;
const PopImg = styled.div`
    display: inline-block;
    width: 200px;
    vertical-align: top;
    img {
        width: 100%;
    }
`;

const TvContent = () => {
    return (
        <>
            <ItemMore>
                <PopImg>
                    {/* alt = 맨 뒤가 1 */}
                    <img src={require(`../../images/eats.jpg`).default} alt="3_1"/>
                </PopImg>
                <PopText num={"3_1"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/eats.jpg`).default} alt="3_1"/>
                </PopImg>
                <PopText num={"3_2"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/js_port.jpg`).default} alt="3_1"/>
                </PopImg>
                <PopText num={"3_2"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/no_img.png`).default} alt="3_1"/>
                </PopImg>
                <PopText num={"3_1"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/noPosterSmall.png`).default} alt="3_1"/>
                </PopImg>
                <PopText num={"3_1"}/>
            </ItemMore>
        </>
    )
}

export default TvContent;