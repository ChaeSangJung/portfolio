import React from "react";
import PopText from "Components/PopText";
import { ItemMore, PopImg } from "./WebviewContent";

const CmsContents = () => {
  return (
    <>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/l_1_1.jpg`).default} alt="로그인"/>
        </PopImg>
        <PopText num={"l_1_1"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/m_1_1.jpg`).default} alt="메인영상관리"/>
        </PopImg>
        <PopText num={"m_1_1"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/m_1_2.jpg`).default} alt="메인영상관리 - 영상업로드"/>
        </PopImg>
        <PopText num={"m_1_2"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/m_1_3.jpg`).default} alt="메인영상관리 - 영상업로드 용량 초과"/>
        </PopImg>
        <PopText num={"m_1_3"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/m_1_4.jpg`).default} alt="메인영상관리 - url 복사"/>
        </PopImg>
        <PopText num={"m_1_4"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/bm_1_1.jpg`).default} alt="방송관리"/>
        </PopImg>
        <PopText num={"bm_1_1"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/bm_1_2.jpg`).default} alt="방송관리 - 방송신규 등록"/>
        </PopImg>
        <PopText num={"bm_1_2"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/bm_1_3.jpg`).default} alt="방송관리 - 방송신규 등록 - 대표이미지"/>
        </PopImg>
        <PopText num={"bm_1_3"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/bm_1_4.jpg`).default} alt="방송관리 - 방송신규 등록 - 대표이미지(이미지 선택)"/>
        </PopImg>
        <PopText num={"bm_1_4"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/bm_1_5.jpg`).default} alt="방송관리 - 방송신규 등록 - 방송상품 등록(선택 전)"/>
        </PopImg>
        <PopText num={"bm_1_5"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/bm_1_6.jpg`).default} alt="방송관리 - 방송신규 등록 - 방송상품 등록(선택 후)"/>
        </PopImg>
        <PopText num={"bm_1_6"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/b_1_1.jpg`).default} alt="방송관리"/>
        </PopImg>
        <PopText num={"b_1_1"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/b_1_2.jpg`).default} alt="방송관리 - 방송상태 - 채팅 클릭(복사)"/>
        </PopImg>
        <PopText num={"b_1_2"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/b_1_3.jpg`).default} alt="방송관리 - 방송상태 - 채팅 폰트 크기 설정"/>
        </PopImg>
        <PopText num={"b_1_3"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/b_1_4.jpg`).default} alt="방송관리 - 방송상태 - 전체 채팅 엑셀파일로 저장"/>
        </PopImg>
        <PopText num={"b_1_4"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/mem_1.jpg`).default} alt="회원관리"/>
        </PopImg>
        <PopText num={"mem_1"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/mem_2.jpg`).default} alt="회원관리 - 회원정보 상세"/>
        </PopImg>
        <PopText num={"mem_2"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/mem_3.jpg`).default} alt="회원관리 - 프로필이미지 등록/변경 선택"/>
        </PopImg>
        <PopText num={"mem_3"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/mem_4.jpg`).default} alt="회원관리 - 프로필이미지 등록/변경 선택 후"/>
        </PopImg>
        <PopText num={"mem_4"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/mem_5.jpg`).default} alt="회원관리 - 회원 리스트 전체 엑셀 파일 저장"/>
        </PopImg>
        <PopText num={"mem_5"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/order_1.jpg`).default} alt="지난 주문 관리"/>
        </PopImg>
        <PopText num={"order_1"}/>
      </ItemMore>
      <ItemMore>
        <PopImg>
          <img src={require(`../../images/cms_capture/order_2.jpg`).default} alt="지난 주문 관리 - 주문 정보 상세"/>
        </PopImg>
        <PopText num={"order_2"}/>
      </ItemMore>
    </>
  )
}

export default CmsContents;