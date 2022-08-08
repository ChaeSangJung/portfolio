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
                    웹뷰의 시작인 주문서 작성하기입니다.<br/>
                    기본 배송지가 지정이 되어 있으면 기본 배송지로 최초 주문서가 작성이 되며 아무런 주소가 없을 때에는 주소 등록하기 버튼이 생성이 되어 주소록을 관리할 수 있습니다.<br/>
                    주소록에 여러 주소가 있으면 변경 버튼을 클릭하여 선택할 수 있습니다.<br/>
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
                    기본 배송지가 지정이 되어 있으면 기본 배송지로 최초 주문서가 작성이 되며 아무런 주소가 없을 때에는 주소 등록하기 버튼이 생성이 되어 주소록을 관리할 수 있습니다.<br/>
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
                    주문 상품을 볼 수 있습니다.
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
                    주문하기의 쿠폰 적용을 눌러 쿠폰 리스트를 불러와 주문에 적용할 수 있습니다.
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
                    결제 수단을 선택할 수 있으며 하단 기본 결제수단으로 저장을 체크하면 선택한 결제 수단을 기본 결제수단으로 지정할 수 있습니다.
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
                    결제 내역에 처음 들어오면 최초 15개의 리스트가 생성이 되며 스크롤이 하단에 닿았을 때 추가로 15개를 더 불러 들여 옵니다.<br/>
                    맨 하단에는 2022년 5월 10일 이전의 주문 내역으로 넘어 갈 수 있는 버튼이 있습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_9" ?
            <>
                <TextPop>
                    정책에 의해 오래된 주문 내역도 1년 보관을 해야 합니다.<br/>
                    정책에 의한 페이지이고 상세 페이지는 없습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_10" ?
            <>
                <TextPop>
                    주문 상세페이지입니다.<br/>
                    문의 버튼을 누르면 해당 파트너사에 전화 연결이 됩니다.<br/>
                    결제 완료 상태일 때에만 배송 정보를 변경할 수 있습니다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_11" ?
            <>
                <TextPop>
                    취소 신청 사유 선택전입니다.<br/>
                    
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_12" ?
            <>
                <TextPop>
                    취소 신청 사유 선택 중
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_13" ?
            <>
                <TextPop>
                    취소 신청 사유 선택 후
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : num === "webview_14" ?
            <>
                <TextPop>
                    상품준비중 - 버튼 없음
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
                    배송준비중 - 버튼 없음
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
                    배송중 - 배송조회
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
                    배송완료 - 배송조회 구매확정 반품/교환
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
                    반품/교환 신청 반품 사유 선택 전
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
                    반품/교환 신청 반품 사유 선택 후
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
                    반품/교환 신청 교환 사유 선택 전
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
                    반품/교환 신청 교환 사유 선택 후
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
                    구매확정
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"react"} />
                    <SkillBadge skill={"styled-component"} />
                    <SkillBadge skill={"js"} />
                </BoxSkillBox>
            </>
            : null}
        </BoxPopText>
    )
}

export default PopText;