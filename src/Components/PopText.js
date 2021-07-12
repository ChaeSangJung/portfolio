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
                    한국야구위원회(KBO)는 8일 "소형준은 기자단 투표 32표 중 11표(34.4%), 팬 투표 25만8천241표 중 12만 1천857표(47.2%)를 받아 총점 40.78점으로 NC 다이노스 양의지(20.86점), 롯데 자이언츠 정훈(15.53점)을 제쳤다"고 전했다.
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
                    소형준은 24이닝 동안 단 2자책점을 기록했으며, 6월 5일 롯데 자이언츠와 홈 경기에선 7이닝 동안 9개의 탈삼진을 잡으며 개인 한 경기 최다 탈삼진 타이기록을 세웠다.
                    소형준이 월간 MVP에 선정된 건 지난해 8월에 이어 두 번째다.<br/>
                    소형준에겐 상금 200만원과 75만원 상당의 신한은행 골드바가 부상으로 주어진다.<br/>
                    아울러 소형준의 모교 구리 인창중학교에 해당 선수 명의로 100만원의 기부금이 전달될 예정이다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "3_3" ?
            <>
                <TextPop>
                    올림픽팀은 13일 오후 7시 30분 용인에서 아르헨티나와 맞대결을 펼친다. 도쿄올림픽을 앞둔 김학범호는 최종엔트리 소집 후 첫 경기에 나선다.
                </TextPop>
                <BoxSkillBox>
                    <SkillBadge skill={"js"} />
                    <SkillBadge skill={"HTML"} />
                    <SkillBadge skill={"css"} />
                </BoxSkillBox>
            </>
            : num === "3_4" ?
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
            : num === "3_5" ?
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
            : num === "3_6" ?
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
            : num === "3_7" ?
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
            : num === "3_8" ?
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
            : num === "3_9" ?
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
            : num === "3_10" ?
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
            : null}
        </BoxPopText>
    )
}

export default PopText;