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
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/web_project/web_07.png`).default} alt="메인 페이지"/>
          <div>
            <img src={require(`../../images/web_project/web_07_01.png`).default} alt="메인 페이지"/>
          </div>
        </PopImg>
        <PopText num={"web_05"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/web_project/web_11.png`).default} alt="카테고리별 페이지"/>
        </PopImg>
        <PopText num={"web_06"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <strong>브랜드(웹)</strong>
          <img src={require(`../../images/web_project/web_04.png`).default} alt="브랜드"/>
          <div>
            <strong>브랜드(웹뷰)</strong>
            <img src={require(`../../images/web_project/web_05.png`).default} alt="브랜드"/>
          </div>
          <div>
            <strong>브랜드 관련 상품</strong>
            <img src={require(`../../images/web_project/web_06.png`).default} alt="브랜드"/>
          </div>
        </PopImg>
        <PopText num={"web_04"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>          
          <img src={require(`../../images/web_project/web_10.png`).default} alt="브랜드 스토리"/>
        </PopImg>
        <PopText num={"web_07"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>          
          <img src={require(`../../images/web_project/web_08.png`).default} alt="찾기"/>
        </PopImg>
        <PopText num={"web_08"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>          
          <img src={require(`../../images/web_project/web_09.png`).default} alt="찾기 결과"/>
        </PopImg>
        <PopText num={"web_09"}/>
      </ItemMore>

    </>
  )
}

export default WebProjectContents;