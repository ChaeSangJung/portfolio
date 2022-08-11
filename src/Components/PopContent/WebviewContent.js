import React from "react";
import PopText from "Components/PopText";
import styled from "styled-components";

export const ItemMore = styled.li`
    padding: 20px 0 20px;
    box-sizing: border-box;
    font-size: 0;
    border-bottom: 1px solid #151515;
    text-align: left;
`;
export const PopImg = styled.div`
    display: inline-block;
    width: 200px;
    padding-left: 15px;
    vertical-align: top;
    box-sizing: border-box;    
    img {
        width: 100%;
    }
`;

const WebviewContent = () => {
  return (
    <>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_01.jpg`).default} alt="주문서"/>
        </PopImg>
        <PopText num={"webview_1"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_02.jpg`).default} alt="주소록"/>
        </PopImg>
        <PopText num={"webview_2"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_03.jpg`).default} alt="주소내역"/>
        </PopImg>
        <PopText num={"webview_3"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_04.jpg`).default} alt="쿠폰"/>
        </PopImg>
        <PopText num={"webview_4"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_05.jpg`).default} alt="결제수단"/>
        </PopImg>
        <PopText num={"webview_5"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_06.jpg`).default} alt="결제완료"/>
        </PopImg>
        <PopText num={"webview_6"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_07.jpg`).default} alt="이전주문 링크"/>
        </PopImg>
        <PopText num={"webview_7"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_09.jpg`).default} alt="이전주문"/>
        </PopImg>
        <PopText num={"webview_9"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_10.jpg`).default} alt="주문상세"/>
        </PopImg>
        <PopText num={"webview_10"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_11.jpg`).default} alt="취소 신청 사유 선택전"/>
        </PopImg>
        <PopText num={"webview_11"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_12.jpg`).default} alt="취소 신청 사유 선택 중"/>
        </PopImg>
        <PopText num={"webview_12"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_13.jpg`).default} alt="취소 신청 사유 선택 후"/>
        </PopImg>
        <PopText num={"webview_13"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_14.jpg`).default} alt="상품준비중"/>
        </PopImg>
        <PopText num={"webview_14"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_15.jpg`).default} alt="배송준비중"/>
        </PopImg>
        <PopText num={"webview_15"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_16.jpg`).default} alt="배송중"/>
        </PopImg>
        <PopText num={"webview_16"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_17.jpg`).default} alt="배송완료"/>
        </PopImg>
        <PopText num={"webview_17"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_18.jpg`).default} alt="반품/교환 신청, 반품 사유 선택 전"/>
        </PopImg>
        <PopText num={"webview_18"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_19.jpg`).default} alt="반품/교환 신청, 반품 사유 선택 후"/>
        </PopImg>
        <PopText num={"webview_19"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_20.jpg`).default} alt="반품/교환 신청, 교환 사유 선택 전"/>
        </PopImg>
        <PopText num={"webview_20"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_21.jpg`).default} alt="반품/교환 신청, 교환 사유 선택 후"/>
        </PopImg>
        <PopText num={"webview_21"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/webview/webview_22.jpg`).default} alt="주문내역의 구매확정"/>
        </PopImg>
        <PopText num={"webview_22"}/>
      </ItemMore>
    </>
  )
}

export default WebviewContent;