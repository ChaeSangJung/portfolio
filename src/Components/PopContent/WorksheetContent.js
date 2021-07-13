import React from "react";
import PopText from "Components/PopText";
import styled from "styled-components";

const ItemMore = styled.li`
    padding: 20px 0 20px;
    box-sizing: border-box;
    font-size: 0;
    border-bottom: 1px solid #151515;
    text-align: left;
`;
const PopImg = styled.div`
    display: inline-block;
    width: 200px;
    padding-left: 15px;
    vertical-align: top;
    box-sizing: border-box;    
    img {
        width: 100%;
    }
`;

const WorksheetContent = () => {
    return (
        <>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/worksheet.gif`).default} alt="2_1"/>
                </PopImg>
                <PopText num={"2_1"}/>
            </ItemMore>
        </>
    )
}

export default WorksheetContent;