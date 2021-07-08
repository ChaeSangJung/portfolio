import React from "react";
import styled from "styled-components";

const BoxPopText = styled.div`
    display: inline-block;
    width: calc(100% - 200px);
    padding-left: 10px;
    vertical-align: top;
    box-sizing: border-box;
`;
const TextPop = styled.p`
    font-size: 14px;
    line-height: 1.6;
    color: #fff;
`;

const PopText = ({num}) => {
    
    return (
        <BoxPopText>
            {num === "3_1" ? 
            <TextPop>
                한국야구위원회(KBO)는 8일 "소형준은 기자단 투표 32표 중 11표(34.4%), 팬 투표 25만8천241표 중 12만 1천857표(47.2%)를 받아 총점 40.78점으로 NC 다이노스 양의지(20.86점), 롯데 자이언츠 정훈(15.53점)을 제쳤다"고 전했다.
            </TextPop>
            : num === "3_2" ?
            <TextPop>
                소형준은 24이닝 동안 단 2자책점을 기록했으며, 6월 5일 롯데 자이언츠와 홈 경기에선 7이닝 동안 9개의 탈삼진을 잡으며 개인 한 경기 최다 탈삼진 타이기록을 세웠다.
                소형준이 월간 MVP에 선정된 건 지난해 8월에 이어 두 번째다.<br/>
                소형준에겐 상금 200만원과 75만원 상당의 신한은행 골드바가 부상으로 주어진다.<br/>
                아울러 소형준의 모교 구리 인창중학교에 해당 선수 명의로 100만원의 기부금이 전달될 예정이다.
            </TextPop>
            : null}
        </BoxPopText>
    )
}

export default PopText;