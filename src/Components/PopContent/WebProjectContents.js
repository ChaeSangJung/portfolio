import React from "react";
import PopText from "Components/PopText";
import { ItemMore, PopImg } from "./WebviewContent"

const WebProjectContents = () => {
  return (
    <>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/web_project/web_01.jpg`).default} alt="장바구니"/>
        </PopImg>
        <PopText num={"web_01"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/web_project/web_02.jpg`).default} alt="마이페이지"/>
        </PopImg>
        <PopText num={"web_02"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/web_project/web_03.jpg`).default} alt="내 정보 수정"/>
        </PopImg>
        <PopText num={"web_03"}/>
      </ItemMore>
    </>
  )
}

export default WebProjectContents;