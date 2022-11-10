import React from "react";
import styled from "styled-components";
import SkillBadge from "Components/SkillBadge";

const BoxPopText = styled.div`
    display: inline-block;
    width: calc(100% - 200px);
    padding-left: 30px;
    padding-right: 30px;
    vertical-align: top;
    box-sizing: border-box;
    @media ${(props) => props.theme.mobile} {
        display: block;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 20px;
    }
`;
const TextPop = styled.p`
    font-size: 14px;
    line-height: 1.6;
    color: #fff;
    strong {
        font-weight: 700;
    }
`;
const BoxSkillBox = styled.div`
    margin-top: 20px;
`;

const PopText = ({num}) => {
    // 15~20 react
    return (
        <BoxPopText>
            {num === "3_1" ? 
            <>
                <TextPop>
                    회원가입하기 1단계 폼입니다. 네이버, 페이스북, 구글로 회원가입하기 기능을 붙였습니다.<br/>
                    처음 해보는 것이라 하나하나 문서를 보아가며 구현했습니다.<br/>
                    앞으로 하게될 유튜브챌린지에 github로 가입하기가 있는데 그 때 강의를 들으며 확실하게 알아놓아야 겠습니다.<br/>
                    더불어 챌린지 기간에 요즘 많이 쓰이고 있는 카카오톡과도 연동을 해봐야겠습니다.<br/>                    
                    이메일 직접 입력하는 부분에 "@"을 입력하면 아래에 @이후에 선택할 수 있는 이메일 나머지 주소 리스트가 나와서 클릭을 하면 선택할 수 있게 되어 있습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "3_2" ?
            <>
                <TextPop>
                    위의 1단계를 마치면 나오는 가입 폼입니다.<br/>
                    성명을 입력을 하면 아래 예명에 입력한 성명이 그대로 나오고 활동명이 중복되는 경우 옆에 작게 몇번째인지 숫자가 붙습니다.<br/>
                    출생년도 성별을 입력하거나 선택을 하면 다음 단계로 넘어갑니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                    <SkillBadge skill={"jQuery"} />
                </BoxSkillBox>
            </>
            : num === "3_4" ?
            <>
                <TextPop>
                    회원가입하기의 마지막 단계이며 위의 단계까지 마쳤으면 현재 상태는 준회원입니다.<br/>
                    전문가 또는 아카데미를 선택을 하면 휴대전화 인증창이 생성이 됩니다.<br/>
                    인증하는 과정은 backend 개발자의 도움을 받았습니다. react로 인증하는 방법과 js로 구현하는 방법을 익혀둬야 겠습니다.                    
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                    <SkillBadge skill={"jQuery"} />
                </BoxSkillBox>
            </>

            // menu
            : num === "3_5" ?
            <>
                <TextPop>
                    단순하게 누르면 각 카테고리 리스트들이 나오고 클릭을 하면 페이지 이동하는 기능입니다.<br/>
                    최초 기획에는 없었지만 제가 했다는 것에 올려 두었습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            // faq 고객센터
            : num === "3_6" ?
            <>
                <TextPop>
                    자주하는 질문과 고객센터의 리스트를 반응형으로 꾸며 보았습니다.<br/>
                    게시판처럼 리스트로 되어 있던 것을 fontawesome의 아이콘들과 함께 작성했습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            // 최근 본 작품
            : num === "3_7" ?
            <>
                <TextPop>
                    서브페이지의 주된 ui형태 입니다.<br/>
                    mouse hover시 좌우로 움직이는 대로 배경화면이 바뀌는 썸네일과 제목과 소제목, 방영날짜로 구성되어 있습니다.<br/>
                    ajax를 이용하여 데이터를 받아 화면을 구성하였습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "3_8" ?
            <>
                <TextPop>
                    hover시 나오는 나중에 보기를 누르면 YouTube의 나중에 보기 재생목록에 저장이되어 따로 모아 볼 수 있습니다.<br/>
                    미리보기를 누르면 해당영상이 팝업으로 나타납니다. videojs라는 jQuery로 video를 구현했습니다.<br/>
                    앞으로 진행될 "YouTube 챌린지"에서 custom video player를 만드는데 잘 배워서 다른 곳에도 적용해 보아야 겠습니다.<br/>
                    웹 서버와 비동기적으로 데이터를 교환하기 위해 여기에서는 ajax를 사용했습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                    <SkillBadge skill={"jQuery"} />
                </BoxSkillBox>
            </>
            : num === "3_9" ?
            <>
                <TextPop>
                    mouse hover시 움직이는 대로 배경화면이 바뀌는 것을 볼 수 있습니다.<br/>
                    많은 부분을 YouTube를 참고했습니다. 컬렉션이라는 이름의 재생목록을 만들 수 있고 이 재생목록에 저장을 해 놓을 수 있습니다.<br/>
                    이 또한 ajax를 이용하여 작성되었습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                    <SkillBadge skill={"jQuery"} />
                </BoxSkillBox>
            </>
            : num === "3_10" ?
            <>
                <TextPop>
                    광고 시상식들을 모아 놓은 페이지입니다.<br/>
                    api가 작성이되면 react로 refactoring이 예정되어 있습니다.<br/>
                    위에 어워드, 개최년도, 개최국가로 filtering을 하는 기능과 왼쪽에 filtering된 creator와 agency들이 나옵니다.<br/>
                    메인으로는 걸러진 시상식들이 나오고 클릭을 하여 링크해서 들어가면 그 시상식에서 시상을 한 광고들이 나타납니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                    <SkillBadge skill={"jQuery"} />
                </BoxSkillBox>
            </>
            : num === "3_14" ?
            <>
                <TextPop>
                    광고 시상식의 위에 있는 옵션들입니다. 현재는 임시로 jQuery를 이용하여 붙여놨습니다.<br/>
                    react로 refactoring이 되면 api를 불러와서 axios와 js를 이용하여 함수를 만들어 작성할 예정입니다.<br/>
                    틈 날 때마다 필요한 것들을 <a href="https://github.com/ChaeSangJung/vanilla_project/tree/master/debouncing_select_key_event_etc" target="_blank" rel="noreferrer">github <i className="fas fa-link"></i></a>에 만들어 두고 있습니다.<br/>
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                    <SkillBadge skill={"jQuery"} />                    
                </BoxSkillBox>
            </>
            // image
            : num === "3_11" ?
            <>
                <TextPop>
                    이미지(프린트) 광고를 모아 놓은 곳입니다.<br/>
                    masonry jQuery를 이용하여 구성했습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                    <SkillBadge skill={"jQuery"} />
                </BoxSkillBox>
            </>
            // image
            : num === "3_12" ?
            <>
                <TextPop>
                    이미지 광고도 영상 광고를 모아 놓은 곳과 마찬가지로 작성한 컬렉션에 저장을 할 수 있습니다.<br/>
                    또한 생성되는 팝업에서 재생목록을 만들 수 있습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            // image
            : num === "3_13" ?
            <>
                <TextPop>
                    영상 페이지와 같게 나중에 보기에도 추가를 할 수 있고, 미리보기도 할 수 있습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "3_15" ?
            <>
                <TextPop>
                    My page는 react로 만들었습니다.<br/> 
                    최초 My page의 메인 페이지만 class형으로 작성되어 있었습니다. 제가 이어 받아 hook으로 refactoring을 하였고 react-redux, axios, styled-componnet를 이용해서 만들었습니다.<br/>
                    모두 작성후에 외부인원을 투입하여 typescript로 refactoring을 하였고 redux-saga를 적용했습니다.<br/>
                    Activity에 대한 내용입니다.<br/>
                    썸네일을 마우스오버시 배경이 바뀌는 것은 useState, useEffect, useRef, useCallback을 사용하여 작성하였습니다. 이 기능을 구현하면서 hook의 사용법을 많이 익힐 수 있었습니다.<br/>
                    각 컬렉션에 저장하는 건 axios(post)를 사용하여 구성하였습니다.<br/>
                    react-swipeable-views 사용하여 각 카테고리 아래의 서브 카테고리를 슬라이드로 넘겨가며 볼 수 있게 구성되었습니다.<br/>
                    아쉬운 점이 있다면 swipe ui를 직접 작성하여 사용하지 못한 점, swipejs를 이용하여 슬라이드가 바뀔 때 axios로 호출을 했으면 낫지 않았을까 하는 점입니다.<br/>
                    외부인원에 의해 최적화가 되었지만 refactoring된 것과 기존에 제가 작성한 것을 비교해 보며 특히 typescript 작성에 대한 공부가 많이 되었습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "3_16" ?
            <>
                <TextPop>
                    collection에 관한 내용입니다.<br/>
                    영상페이지, 이미지페이지 등에서 저장한 내용들을 볼 수 있습니다.<br/>
                    이 또한 react-swipeable-views 사용하였습니다.<br/>
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "3_17" ?
            <>
                <TextPop>
                    creative에 관한 내용입니다.<br/>
                    본인이 업로드한 작품, 업로드한 작품 중에서 심사중인 작품, 본인이 스태프로 참여한 작품을 보여주는 곳입니다.<br/>
                    마찬가지로 react-swipeable-views 사용하였습니다.<br/>                    
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "3_18" ?
            <>
                <TextPop>
                    my page의 메인페이지입니다.<br/>
                    이름과 자신의 회원 class를 보여주고 각각의 sns를 설정을 해주면 자신의 sns로 링크를 할 수 있도록 해주었습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "3_19" ?
            <>
                <TextPop>
                    my page의 메인 페이지에서 자신의 활동내용을 보여주는 곳입니다.<br/>
                    클릭을 하면 간편하게 볼 수도 있고 전체 내용을 볼 수 있게 만들었습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "3_20" ?
            <>
                <TextPop>
                    사이트내에서 쓸 수 있는 내공/외공 내역을 볼 수 있는 페이지입니다.<br/>
                    메인페이지 왼쪽 아래쪽에 있는 내외공을 누르면 해당 페이지를 볼 수 있습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "3_21" ?
            <>
                <TextPop>
                    검색 페이지입니다.<br/>검색을 통해 받은 데이터를 화면에 보여 줄 수 있습니다.<br/>
                    ajax를 이용을 했고 옵션을 선택하면 query를 가지고 다시 ajax를 불러 오는 형태로 만들었습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>            
            : num === "3_23" ?
            <>
                <TextPop>
                    검색창에서 자주 찾는 keyword를 카테고리별로 분류를 했습니다.<br/>
                    클릭을 하면 검색페이지의 해당 카테고리로 넘어가 keyword에 관련된 내용들을 보여줍니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            // worksheetmaker
            : num === "2_1" ?
            <>
                <TextPop>
                    YouTube 댓글 입력하는 곳과 비슷하게 글이 길어지면 textarea가 늘어나도록 해달라는 수정사항을 받았습니다.<br/>
                    검색 과정에서 debounce와 throttle을 알게 되었습니다. 여기서는 특정 시간이 흐른 후 이벤트가 발생하는 것이 적합해 보여 debounce를 채택했습니다.<br/>
                    보이는 textarea에 글을 입력하면 보이지 않는 textarea에도 글이 복사가 된 후 keyup 이벤트가 발생하면 보이지 않는 textarea의 scrollHeight를 구해서 보이는 textarea의 height를 설정해 주는 방식으로 구현했습니다.<br/>
                    여기서 알게된 debouce와 throttle은 제 테스트 베드인 "리액트JS 챌린지"페이지의 검색부분에도 적용되었습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            // webview
            : num === "webview_1" ?
            <>
                <TextPop>
                    <strong>주문서 작성하기</strong><br/><br/>
                    기본 배송지가 지정이 되어 있으면 기본 배송지가 주문서에 작성이 됩니다. 아무런 주소가 없을 때에는 주소 등록하기 버튼이 생성이 되어 주소록을 관리할 수 있습니다.<br/>
                    주소록에 여러 주소가 있으면 변경 버튼을 클릭하여 선택할 수 있습니다.<br/>
                    <br/>
                    결제하기 버튼을 터치를 하면 연동된 pg사의 페이지가 등장하면서 결제가 진행이 됩니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_2" ?
            <>
                <TextPop>
                    <strong>배송지 변경</strong><br/><br/>
                    기본 배송지로 지정이 되어 있으면 기본 배송지가 주문서에 작성이 됩니다. 주소가 없을 때에는 주소 등록하기 버튼이 생성이 되어 주소록을 관리할 수 있습니다.<br/>
                    주소록에 여러 주소가 있으면 변경 버튼을 클릭하여 선택할 수 있습니다.<br/>
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_3" ?
            <>
                <TextPop>
                    <strong>주문한 상품</strong>
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_4" ?
            <>
                <TextPop>
                    <strong>쿠폰 적용</strong><br/><br/>
                    주문하기의 쿠폰 적용 버튼을 눌러 쿠폰 리스트를 불러와 주문하기에 적용할 수 있습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_5" ?
            <>
                <TextPop>
                    <strong>결제 수단을 선택</strong><br/><br/>
                    결제 수단을 선택할 수 있습니다. 하단 기본 결제수단 체크박스를 선택하면 선택한 결제 수단을 기본 결제수단으로 지정할 수 있습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_6" ?
            <>
                <TextPop>
                    <strong>결제</strong><br/><br/>
                    결제를 하면 결제완료라는 상태와 취소할 수 있는 버튼이 생성됩니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_7" ?
            <>
                <TextPop>
                    <strong>결제 내역</strong><br/><br/>
                    결제 내역에 처음 들어오면 최초 15개의 리스트가 생성이 됩니다.<br/>
                    react-query의 useInfiniteQuery를 사용하여 스크롤이 하단에 닿을 때마다 추가로 15개를 더 불러 들여 옵니다.<br/>
                    맨 하단에는 2022년 5월 이전의 주문 내역으로 넘어 갈 수 있는 링크가 있습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"react-query"} />
                </BoxSkillBox>
            </>
            : num === "webview_9" ?
            <>
                <TextPop>
                    <strong>이전 주문 내역</strong><br/><br/>
                    정책에 의해 오래된 주문 내역도 1년 보관을 해야 합니다.<br/>
                    정책에 의한 페이지이고 상세 페이지는 없습니다.<br/>
                    결제 내역과 마찬가지로 useInfiniteQuery를 사용하여 스크롤이 하단에 닿을 때마다 추가로 15개를 더 불러 들여 옵니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"react-query"} />
                </BoxSkillBox>
            </>
            : num === "webview_10" ?
            <>
                <TextPop>
                    <strong>주문 상세페이지</strong><br/><br/>                    
                    문의 버튼을 누르면 해당 파트너사에 전화 연결이 됩니다.<br/>
                    결제 완료 상태일 때에만 배송 정보를 변경할 수 있습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"react-query"} />
                </BoxSkillBox>
            </>
            : num === "webview_11" ?
            <>
                <TextPop>
                    <strong>취소 신청 사유 선택 전</strong><br/><br/>                    
                    사유를 선택하지 않으면 신청하기 버튼이 비활성화가 되어 신청을 할 수 없습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"axios"} />
                </BoxSkillBox>
            </>
            : num === "webview_12" ?
            <>
                <TextPop>
                    <strong>취소 신청 사유 선택 중</strong><br/><br/>                    
                    사유를 선택을 하면 가려졌던 환불정보가 생성이 되며 취소 사유(판매자 책임 또는 구매자 책임)에 따라 환불금액을 계산 후 나타나집니다.<br/>
                    axios.post()를 사용하여 취소 사유가 바뀔 때마다 state을 업데이트하여 환불금액을 보여줍니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"axios"} />
                </BoxSkillBox>
            </>
            : num === "webview_13" ?
            <>
                <TextPop>
                    <strong>취소 신청 사유 선택 후</strong><br/><br/>                    
                    사유를 선택 후 취소 사유에 따른 환불금액을 계산한 다음 환불금액을 표시해 줍니다.<br/>
                    이후 신청하기 버튼을 클릭하면 취소 신청이 완료가 됩니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"axios"} />
                </BoxSkillBox>
            </>
            : num === "webview_14" ?
            <>
                <TextPop>    
                    <strong>상품준비중 - 버튼 없음</strong><br/><br/>                                    
                    결제 완료 다음 단계인 상품 준비중 입니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_15" ?
            <>
                <TextPop>
                    <strong>배송준비중 - 버튼 없음</strong><br/><br/>
                    
                    상품준비중 다음 단계인 배송준비중입니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_16" ?
            <>
                <TextPop>
                    <strong>배송중 - 버튼 : 배송조회</strong><br/><br/>

                    배송중과 배송완료일 때에는 배송조회를 할 수 있습니다.<br/>
                    webview이기 때문에 app에서 작동을 해야 합니다. web에서 배송조회를 할 수 있는 url값을 ios와 android로 구분하여 각 환경에 맞게 값을 전달하였습니다.<br/>                    
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_17" ?
            <>
                <TextPop>
                    <strong>배송완료 - 버튼 : 배송조회 구매확정 반품/교환</strong>
                    
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_18" ?
            <>
                <TextPop>
                    <strong>반품/교환 신청, 반품 사유 선택 전</strong><br/><br/>
                    
                    사유를 선택하면 환불 금액이 계산이 되고, 신청하기 버튼이 활성화가 됩니다.<br/>
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_19" ?
            <>
                <TextPop>
                    <strong>반품/교환 신청, 반품 사유 선택 후</strong><br/><br/>
                    
                    신청하기 버튼을 눌러 반품을 신청할 수 있습니다.<br/>
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_20" ?
            <>
                <TextPop>
                    <strong>반품/교환 신청, 교환 사유 선택 전</strong><br/><br/>
                    
                    교환도 반품과 같이 사유를 선택하면 환불 금액이 계산이 되고, 신청하기 버튼이 활성화가 됩니다.<br/>
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_21" ?
            <>
                <TextPop>
                    <strong>반품/교환 신청, 교환 사유 선택 후</strong><br/><br/>
                    
                    신청하기 버튼을 눌러 교환을 신청할 수 있습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_22" ?
            <>
                <TextPop>
                    <strong>주문내역의 구매확정</strong><br/><br/>
                    주문내역의 구매확정 버튼을 누르면 구매가 확정됐다는 toast메시지와 함께 구매가 확정이 됩니다.<br/>
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            // cms
            : num === "l_1_1" ?
            <>
                <TextPop>
                    <strong>로그인페이지</strong>
                    
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "m_1_1" ?
            <>
                <TextPop>
                    <strong>메인영상관리</strong><br/><br/>
                    App의 메인페이지 상단 배너의 영상을 관리하는 곳입니다.<br/>
                    현재 등록되고 사용중인 영상들을 관리할 수 있습니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "m_1_2" ?
            <>
                <TextPop>
                    <strong>메인영상관리 - 영상업로드</strong><br/><br/>
                    최대 업로드 사이즈를 제한할 수 있으며(js이용), 업로드 파일도 제한할 수 있습니다.(input[type='file']의 고유 속성과 js이용)<br/>
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "m_1_3" ?
            <>
                <TextPop>
                    <strong>메인영상관리 - 영상업로드 용량 초과</strong><br/><br/>
                    제한 설정을 해놓은 용량보다 파일의 용량이 클 경우 경고창이 나타납니다.(js이용)
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "m_1_4" ?
            <>
                <TextPop>
                    <strong>메인영상관리 - url 복사</strong><br/><br/>
                    복사 버튼을 누르면 해당 url이 복사가 되며 좌하단에 toast메시지가 나타났다가 사라집니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "bm_1_1" ?
            <>
                <TextPop>
                    <strong>방송관리</strong><br/><br/>
                    종료/예정/진행 중인 방송을 관리할 수 있는 페이지입니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "bm_1_2" ?
            <>
                <TextPop>
                    <strong>방송관리 - 방송신규 등록</strong><br/><br/>
                    우상단의 방송신규버튼을 누르면 이미지와 같은 새창이 나타납니다.<br/>
                    방송의 주제에 맞게 설정을 하면 됩니다. 제목 옆에 *표시가 있는 필수 입력 값을 설정을 안하면 우상단의 저장 버튼이 활성화가 되지 않습니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "bm_1_3" ?
            <>
                <TextPop>
                    <strong>방송관리 - 방송신규 등록 - 대표이미지</strong><br/><br/>
                    방송관리 리스트에 보여지는 이미지를 설정/변경할 수 있습니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "bm_1_4" ?
            <>
                <TextPop>
                    <strong>방송관리 - 방송신규 등록 - 대표이미지(이미지 선택)</strong><br/><br/>
                    jpg, jpeg, gif 등 설정한 파일 형식만 올릴 수 있으며(input[type='file']의 고유 속성인 accept 사용), window에서의 모든 파일 보기에 대응하기 위해 비설정 파일을 선택 시 경고창이 나타납니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "bm_1_5" ?
            <>
                <TextPop>
                    <strong>방송관리 - 방송신규 등록 - 방송상품 등록(선택 전)</strong><br/><br/>
                    방송상품 버튼을 클릭하면 방송에 내보낼 상품을 선택할 수 있는 팝업창이 나타납니다.<br/>
                    해당 상품을 선택하여 저장 버튼을 클릭합니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "bm_1_6" ?
            <>
                <TextPop>
                    <strong>방송관리 - 방송신규 등록 - 방송상품 등록(선택 후)</strong><br/><br/>
                    방송상품이 등록된 모습입니다. 좌측에 20/30으로 현재 선택한 상품의 수와 등록할 수 있는 상품의 수를 나타내고 있습니다.(js이용)
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "b_1_1" ?
            <>
                <TextPop>
                    <strong>방송관리</strong><br/><br/>
                    방송상태가 예정이나 진행인 방송을 클릭을 하면 이미지와 같은 새창이 나타납니다.<br/>
                    채팅과 현재 송출되고 있는 방송, 프롬프터를 볼 수 있습니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "b_1_2" ?
            <>
                <TextPop>
                    <strong>방송관리 - 방송상태 - 채팅 클릭(복사) - 프롬프터에 붙여 넣기</strong><br/><br/>
                    채팅 중에 클릭을 하면 이미지와 같이 클릭을 한 채팅이 표시가 되며 프롬프터에 붙여넣기를 할 수 있습니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "b_1_3" ?
            <>
                <TextPop>
                    <strong>방송관리 - 방송상태 - 채팅 폰트 크기 설정</strong><br/><br/>
                    방송을 진행하는 호스트가 채팅을 읽기 수월하게 폰트 크기를 조절할 수 있습니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "b_1_4" ?
            <>
                <TextPop>
                    <strong>방송관리 - 방송상태 - 전체 채팅 엑셀파일로 저장</strong><br/><br/>
                    전체 채팅을 엑셀 파일로 저장할 수 있습니다.(Blob, createObjectURL 등 사용)
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "mem_1" ?
            <>
                <TextPop>
                    <strong>회원관리</strong><br/><br/>
                    전체 회원의 목록과 정보를 알 수 있습니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "mem_2" ?
            <>
                <TextPop>
                    <strong>회원관리 - 회원정보 상세</strong><br/><br/>
                    아이디를 클릭하면 회원 상세 정보의 새창이 나타납니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "mem_3" ?
            <>
                <TextPop>
                    <strong>회원관리 - 프로필이미지 등록/변경 선택</strong><br/><br/>
                    파일형식과 용량에 제한을 두었습니다.(input[type='file']의 고유 속성인 accept와 js사용)
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "mem_4" ?
            <>
                <TextPop>
                    <strong>회원관리 - 프로필이미지 등록/변경 선택 후</strong><br/><br/>
                    프로필이미지 등록/변경 후의 모습입니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "mem_5" ?
            <>
                <TextPop>
                    <strong>회원관리 - 회원 리스트 전체 엑셀 파일 저장</strong><br/><br/>
                    Blob, createObjectURL 등을 사용했습니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "order_1" ?
            <>
                <TextPop>
                    <strong>지난 주문 관리</strong><br/><br/>
                    2022년 5월 이전의 주문을 관리할 수 있는 페이지입니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "order_2" ?
            <>
                <TextPop>
                    <strong>지난 주문 관리 - 주문 정보 상세</strong><br/><br/>
                    
                    주문 번호를 클릭하면 주문 정보 상세의 새창이 나타나집니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"html"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            // web_project
            : num === "web_01" ?
            <>
                <TextPop>
                    <strong>장바구니</strong><br/><br/>
                    상품을 골라 장바구니에 담으면 나타나는 페이지입니다.<br/>
                    상태관리 라이브러리는 recoil을 사용하여 수량의 변경, 상품의 장바구니에서의 삭제, 상품 선택을 관리하였습니다.<br/>
                    구매하기 버튼을 클릭하면 recoil atom에 저장되어 있는 정보를 가지고 주문하기로 넘어갑니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"typescript"} />
                    <SkillBadge skill={"nextjs"} />
                    <SkillBadge skill={"react-query"} />
                    <SkillBadge skill={"recoil"} />
                    <SkillBadge skill={"style-component"} />
                </BoxSkillBox>
            </>
            : num === "web_02" ?
            <>
                <TextPop>
                    <strong>마이페이지</strong><br/><br/>
                    닉네임이 설정되어 있으면 닉네임이 나오고 닉네임이 설정되어 있지 않다면 이름이 표시됩니다. 주문내역과 쿠폰으로 이동할 수 있는 링크가 있으며, 쿠폰은 현재 쿠폰의 갯수를 알 수 있습니다.<br/>
                    배송지관리,공지사항으로 이동할 수 있는 링크와 카카오톡 문의하기로 연결되는 버튼을 가지고 있습니다.<br/>
                    우상단의 '&gt;'를 누르면 내 정보를 수정할 수 있는 페이지로 링크가 됩니다.<br/>
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"typescript"} />
                    <SkillBadge skill={"nextjs"} />
                    <SkillBadge skill={"react-query"} />
                    <SkillBadge skill={"style-component"} />
                </BoxSkillBox>
            </>
            : num === "web_03" ?
            <>
                <TextPop>
                    <strong>마이페이지 - 내 정보 수정</strong><br/><br/>
                    프로필 이미지를 설정/변경할 수 있습니다.<br/>
                    아이디와 생년월일, 성별을 제외한 값들을 수정할 수 있습니다. 하단 회원탈퇴와 로그아웃을 클릭하면 각각 회원탈퇴 페이지로 넘어가고, 로그아웃 처리가 됩니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"typescript"} />
                    <SkillBadge skill={"nextjs"} />
                    <SkillBadge skill={"react-query"} />
                    <SkillBadge skill={"style-component"} />
                </BoxSkillBox>
            </>
            : num === "web_04" ?
            <>
                <TextPop>
                    <strong>브랜드</strong><br/><br/>
                    웹과 웹뷰페이지를 구분해서 만들었습니다.<br/><br/>
                    웹과 웹뷰페이지를 구분한 이유<br/>
                    1. 모바일 기기 상단 부분 터치시 스크롤 탑이 되어야 한다.<br/>
                    - 왼쪽 부분을 가리고(반응형) 웹뷰로 사용, 브랜드 부분이 div.Container에 쌓여 있기 때문에 &lt;html&gt;을 스크롤 못함<br/><br/>
                    해당 브랜드에 관한 정보와 팔로우를 할 수 있는 버튼과 공지사항(vertical banner)과 현재 진행 중인 이벤트(링크 클릭 시 브랜드 스토리로 연결), 카테고리별 해당 브랜드의 상품을 보여 줍니다.<br/><br/>
                    이 곳에서도 메인페이지에 적용한 next/router의 scrollRestoration 기능이 동작하지 않는 것을 해결하기 위한 Hook이 적용되어 있습니다.<br/>
                    카테고리와 소팅이 바뀔때마다 그 값을 url parameter로 받아 recoil로 관리를 했습니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"typescript"} />
                    <SkillBadge skill={"nextjs"} />
                    <SkillBadge skill={"react-query"} />
                    <SkillBadge skill={"style-component"} />
                </BoxSkillBox>
            </>
            : num === "web_05" ?
            <>
                <TextPop>
                    <strong>웹 메인 페이지</strong><br/><br/>
                    layout 구조로 인해 next/router의 scrollRestoration 기능이 동작하지 않는 것을 해결하기 위해 Hook을 만들었습니다.<br/>
                    해당 웹 메인 페이지에서 상품 리스트에서 상품 상세로 링크 후 전 페이지로 돌아 갔을 때 메인 페이지의 위치가 탑으로 되었을 때 이를 해결하고자함 입니다.<br/>
                    뒤로 돌아 갔을 때 페이지 위치를 알아야 하는지 체크를 할 수 있는 값과 전 페이지의 위치를 session storage에서 관리하는 Hook입니다.<br/><br/>
                    react-indiana-drag-scroll 사용하여 카테고리 탭을 만들었습니다.<br/>
                    recoil을 사용하여 현재 카테고리와 소팅의 기준을 관리합니다.<br/>
                    이는 상품 상세에서 전 페이지로 돌아 갔을 때 원위치 하기 위함입니다.<br/>
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"typescript"} />
                    <SkillBadge skill={"nextjs"} />
                    <SkillBadge skill={"react-query"} />
                    <SkillBadge skill={"style-component"} />
                </BoxSkillBox>
            </>
            : num === "web_06" ?
            <>
                <TextPop>
                    <strong>카테고리 별 페이지</strong><br/><br/>
                    상품 카테고리 별로 상품 리스트를 보여주는 페이지입니다.<br/>
                    위의 메인페이지에 적용한 next/router의 scrollRestoration 기능이 동작하지 않는 것을 해결하기 위한 Hook이 적용되어 있습니다.<br/>
                    카테고리와 소팅이 바뀔때마다 그 값을 url parameter로 받아 recoil로 관리를 했습니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"typescript"} />
                    <SkillBadge skill={"nextjs"} />
                    <SkillBadge skill={"react-query"} />
                    <SkillBadge skill={"style-component"} />
                </BoxSkillBox>
            </>
            : num === "web_07" ?
            <>
                <TextPop>
                    <strong>브랜드 스토리</strong><br/><br/>
                    브랜드에서 링크에 연결된 페이지입니다.<br/>
                    해당 브랜드의 이벤트 등을 한눈에 볼 수 있도록 구성이 되어있습니다.<br/><br/>
                    좋아요 버튼이 있으며 차후에 마이페이지에서 좋아요에 체크한 이벤트 리스트를 볼 수 있게 개발할 예정입니다.<br/><br/>
                    이 곳에는 브랜드 페이지에서 넘어 왔다(뒤로 돌아 갔을 때 돌아 갈 페이지의 위치를 알아야 한다)라는 것을 체크할 수 있고 브랜드 페이지로 돌아 갔을 때 해당 위치로 돌아 가는 Hook이 적용되어 있습니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"typescript"} />
                    <SkillBadge skill={"nextjs"} />
                    <SkillBadge skill={"react-query"} />
                    <SkillBadge skill={"style-component"} />
                </BoxSkillBox>
            </>
            : num === "web_08" ?
            <>
                <TextPop>
                    <strong>검색</strong><br/><br/>
                    상품을 검색할 수 있고 최근 검색어 리스트가 있으며 삭제 또한 가능합니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"typescript"} />
                    <SkillBadge skill={"nextjs"} />
                    <SkillBadge skill={"react-query"} />
                    <SkillBadge skill={"style-component"} />
                </BoxSkillBox>
            </>
            : num === "web_09" ?
            <>
                <TextPop>
                    <strong>검색 결과</strong><br/><br/>
                    검색 keyword에 맞는 해당 상품을 보여 줍니다.
                </TextPop>
                <BoxSkillBox>                    
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"typescript"} />
                    <SkillBadge skill={"nextjs"} />
                    <SkillBadge skill={"react-query"} />
                    <SkillBadge skill={"style-component"} />
                </BoxSkillBox>
            </>
            : null}
        </BoxPopText>
    )
}

export default PopText;