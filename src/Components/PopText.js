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
                </BoxSkillBox>
            </>
            : num === "3_11" ?
            <>
                <TextPop>
                    아르헨티나 올림픽팀을 이끌고 한국과 2년 만에 대결하게 된 바티스타 감독은 "한국은 폴란드에서 열린 20세 이하(U-20) 월드컵을 포함해 많은 경기에 만났다. 상당히 강팀이고 좋은 선수가 많다. 선수들의 능력치가 향상되고 있는 팀이다. 특정 선수에 대한 언급보다 전체적으로 완성도가 높은 팀"이라고 말했다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "3_12" ?
            <>
                <TextPop>
                    한국과 평가전을 치를 아르헨티나는 도쿄올림픽 남미예선을 1위로 통과하며 명성에 걸맞는 성적을 기록했다. 지난달 덴마크와 사우디아라비아를 상대로 치른 경기에선 모두 승리를 거두며 도쿄올림픽을 앞두고 전력을 과시했다. 아르헨티나는 올림픽 본선을 앞두고 마지막으로 치르는 한국전에서 전력을 다할 것으로 점쳐진다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "3_13" ?
            <>
                <TextPop>
                    아르헨티나 올림픽팀을 이끌고 한국과 2년 만에 대결하게 된 바티스타 감독은 "한국은 폴란드에서 열린 20세 이하(U-20) 월드컵을 포함해 많은 경기에 만났다. 상당히 강팀이고 좋은 선수가 많다. 선수들의 능력치가 향상되고 있는 팀이다. 특정 선수에 대한 언급보다 전체적으로 완성도가 높은 팀"이라고 말했다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "3_14" ?
            <>
                <TextPop>
                    아르헨티나를 이끄는 바티스타 감독은 지난 2019년 FIFA U-20 월드컵에서 이강인과 만난 경험이 있다. 당시 조별리그 3차전에서 이강인이 선제골을 어시스트한 한국은 아르헨티나를 꺾고 16강에 진출했다.
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
                    올림픽팀의 막내 이강인은 이번 올림픽에서 활약이 기대받는 선수 중 한명이다. 지난 2019년 국제축구연맹(FIFA) 20세 이하(U-20) 월드컵에서 골든볼을 차지한 이강인은 또 한번 세계대회를 앞두고 있다.
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
                    한국과 평가전을 치를 아르헨티나는 도쿄올림픽 남미예선을 1위로 통과하며 명성에 걸맞는 성적을 기록했다. 지난달 덴마크와 사우디아라비아를 상대로 치른 경기에선 모두 승리를 거두며 도쿄올림픽을 앞두고 전력을 과시했다. 아르헨티나는 올림픽 본선을 앞두고 마지막으로 치르는 한국전에서 전력을 다할 것으로 점쳐진다.
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
                    아르헨티나를 이끄는 바티스타 감독은 지난 2019년 FIFA U-20 월드컵에서 이강인과 만난 경험이 있다. 당시 조별리그 3차전에서 이강인이 선제골을 어시스트한 한국은 아르헨티나를 꺾고 16강에 진출했다.
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
                    아르헨티나 올림픽팀을 이끌고 한국과 2년 만에 대결하게 된 바티스타 감독은 "한국은 폴란드에서 열린 20세 이하(U-20) 월드컵을 포함해 많은 경기에 만났다. 상당히 강팀이고 좋은 선수가 많다. 선수들의 능력치가 향상되고 있는 팀이다. 특정 선수에 대한 언급보다 전체적으로 완성도가 높은 팀"이라고 말했다.
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
                    한국과 평가전을 치를 아르헨티나는 도쿄올림픽 남미예선을 1위로 통과하며 명성에 걸맞는 성적을 기록했다. 지난달 덴마크와 사우디아라비아를 상대로 치른 경기에선 모두 승리를 거두며 도쿄올림픽을 앞두고 전력을 과시했다. 아르헨티나는 올림픽 본선을 앞두고 마지막으로 치르는 한국전에서 전력을 다할 것으로 점쳐진다.
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
                    아르헨티나를 이끄는 바티스타 감독은 지난 2019년 FIFA U-20 월드컵에서 이강인과 만난 경험이 있다. 당시 조별리그 3차전에서 이강인이 선제골을 어시스트한 한국은 아르헨티나를 꺾고 16강에 진출했다.
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
                    올림픽팀의 막내 이강인은 이번 올림픽에서 활약이 기대받는 선수 중 한명이다. 지난 2019년 국제축구연맹(FIFA) 20세 이하(U-20) 월드컵에서 골든볼을 차지한 이강인은 또 한번 세계대회를 앞두고 있다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "3_22" ?
            <>
                <TextPop>
                    한국과 평가전을 치를 아르헨티나는 도쿄올림픽 남미예선을 1위로 통과하며 명성에 걸맞는 성적을 기록했다. 지난달 덴마크와 사우디아라비아를 상대로 치른 경기에선 모두 승리를 거두며 도쿄올림픽을 앞두고 전력을 과시했다. 아르헨티나는 올림픽 본선을 앞두고 마지막으로 치르는 한국전에서 전력을 다할 것으로 점쳐진다.
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
                    올림픽팀의 막내 이강인은 이번 올림픽에서 활약이 기대받는 선수 중 한명이다. 지난 2019년 국제축구연맹(FIFA) 20세 이하(U-20) 월드컵에서 골든볼을 차지한 이강인은 또 한번 세계대회를 앞두고 있다.
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
            : null}
        </BoxPopText>
    )
}

export default PopText;