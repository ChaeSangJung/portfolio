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

const TvContent = () => {
    return (
        <>
            <ItemMore>
                <PopImg>
                    {/* alt = 맨 뒤가 1 */}
                    <img src={require(`../../images/pop/enroll_1.png`).default} alt="3_1"/>
                </PopImg>
                <PopText num={"3_1"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/enroll_2.gif`).default} alt="3_2"/>
                </PopImg>
                <PopText num={"3_2"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/enroll_3.gif`).default} alt="3_4"/>
                </PopImg>
                <PopText num={"3_4"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/menu.gif`).default} alt="3_5"/>
                </PopImg>
                <PopText num={"3_5"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/page_1.gif`).default} alt="3_6"/>
                </PopImg>
                <PopText num={"3_6"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/page_1.png`).default} alt="3_7"/>
                </PopImg>
                <PopText num={"3_7"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/page_2_1.gif`).default} alt="3_8"/>
                </PopImg>
                <PopText num={"3_8"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/page_2.gif`).default} alt="3_9"/>
                </PopImg>
                <PopText num={"3_9"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/page_2.png`).default} alt="3_10"/>
                </PopImg>
                <PopText num={"3_10"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/page_5.gif`).default} alt="3_14"/>
                </PopImg>
                <PopText num={"3_14"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/page_3.gif`).default} alt="3_11"/>
                </PopImg>
                <PopText num={"3_11"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/page_4.gif`).default} alt="3_12"/>
                </PopImg>
                <PopText num={"3_12"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/page_4_1.gif`).default} alt="3_13"/>
                </PopImg>
                <PopText num={"3_13"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/react_activity_1.gif`).default} alt="3_15"/>
                </PopImg>
                <PopText num={"3_15"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/react_collection_1.gif`).default} alt="3_16"/>
                </PopImg>
                <PopText num={"3_16"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/react_creative_1.gif`).default} alt="3_17"/>
                </PopImg>
                <PopText num={"3_17"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/react_main.gif`).default} alt="3_18"/>                
                </PopImg>
                <PopText num={"3_18"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/react_main_1.gif`).default} alt="3_19"/>
                </PopImg>
                <PopText num={"3_19"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/react_pv_1.gif`).default} alt="3_20"/>
                </PopImg>
                <PopText num={"3_20"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/search_1.gif`).default} alt="3_21"/>
                </PopImg>
                <PopText num={"3_21"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/search_2.gif`).default} alt="3_22"/>
                </PopImg>
                <PopText num={"3_22"}/>
            </ItemMore>
            <ItemMore>
                <PopImg>
                    <img src={require(`../../images/pop/search_bar_1.gif`).default} alt="3_23"/>
                </PopImg>
                <PopText num={"3_23"}/>
            </ItemMore>
        </>
    )
}

export default TvContent;