import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 15px;
`;
const TextComment = styled.p`
    font-size: 14px;
    line-height: 1.6;
`;

const Commentary = ({type}) => {
    
    return (
        <Container>
          {type === "react_challenge" 
          ? (
            <TextComment>
                이 챌린지를 수행한 많은 이들이 제일 어렵다고 한 챌린지라고 합니다. 그러나 저에게는 재미가 있었습니다.<br/>
                state를 관리해서 필요한 부분만 다시 생성한다. 라는 개념도 신선했고 Componet를 재사용한다는 것도 재미가 있었습니다. 어렵고 힘은 들었지만 가장 재미있게 한 챌린지입니다. <br/>
                지금도 react의 새로운 개념을 익히면 이곳에다가 적용을 해봅니다.<br/>
                class형으로 되어 있는 것을 hook으로 refactoring하기, state hook, effect hook 등으로 저만의 hook을 만들어 사용해 보기, 챌린지 기간에 강의 시간에는 useReducer를 쓸 일이 없었지만 익혀서 이곳에다가 사용해 보기 등 새로운 것을 알게 될 때마다 적용해 보는 일종의 테스트 베드(?)같은 곳이 되었습니다.<br/>
                좋은 frontend 개발자는 좋은 js 개발자다 라는 생각이 든 챌린지였습니다. 궁극적으로는 typescript로 refactoring하기입니다.
            </TextComment>
          )
          : type === "js_challenge" ? (
            <TextComment>
                갓 웹퍼블리셔가 돼서 jQuery만 알던 시절에
                Frontend라는 새로운 세상이 있다는 것을 알게 해준 챌린지였습니다. <br/>
                부끄러운 과거의 이야기이지만
                api를 쓴다는 것은 ajax를 통해 php 개발자들이 하는 걸로 알고 있었던 저에게
                fetch가 무었이며, rest api가 무었인지 알게 해준 챌린지였습니다.<br/>
                한 단계 나아갈 수 있는 계기가 되었던 챌린지였습니다.
            </TextComment>
          )
          : type === "python_challenge" ? (
            <TextComment>
                javascript 외에 처음 접해 본 언어입니다.<br/>
                python을 접하면서 data의 타입 등 javascript에도 기본이 되는 개념들을 다시 정립할 수 있었습니다.<br/>
                파이썬을 익힌 계기는 알고리즘 등 코딩테스트를 대비하기 위해서였습니다.
                알고리즘, 데이터 구조를 익히고 알게 되면서 
                js로 코드를 만들 때 다시 한번 생각을 하며 
                간결하고 누구나 보면 알 수 있는 코드를 만드는 데 공을 들이는 계기가 되었습니다.<br/>
                Django, Flask를 배우면서 database 살짝이지만 알 수 있었습니다.
                Django, Flask를 다시 접할 기회가 없어서 기억이 희미하지만
                다시 익히고 또 익혀서 side project를 할 때 Backend부터 Frontend까지 혼자 해보고 싶습니다.
            </TextComment>
          )
          : type === "tvcf" ? (
            <TextComment>
              류현진이 선발 등판한 8일 볼티모어전에서 팀 타선은 1회부터 폭발하며 3점을 뽑아줬고, 4회 3점, 5회 1점을 더해 류현진의 어깨를 가볍게 했다. 수비에서도 호수비가 나왔다. 5회 빗맞은 안타가 나오면서 무사 만루에 몰렸던 류현진은 희생뜬공으로 한 점을 내준 뒤 1사 1·3루 위기가 계속됐다. 트레이 만시니의 깊숙한 뜬공을 잡은 토론토 우익수 테오스카 에르난데스는 강한 송구로 홈으로 들어오던 오스턴 윈스를 잡아냈다. 실점을 줄인 결정적 호수비였다. 류현진은 그 순간 오른손을 번쩍 들며 환하게 웃었다. 올시즌 류현진이 그라운드에서 보여준 가장 환한 웃음이었다.
            </TextComment>
          )
          : type === "worksheetmaker" ? (
            <TextComment>
              타선과 수비의 지원은 어쩌면 류현진의 ‘한 턱’에서 나왔는지도 모른다. 5이닝 1실점으로 시즌 8승(5패)째를 따낸 류현진은 경기 뒤 화상 기자회견에서 동료들에게 한식당에서 밥을 산 일화를 꺼냈다. 류현진은 “저도 여기(볼티모어)와서 처음 갔던 곳인데 선수들이 너무 좋아하면서 잘 먹었다. 먹고 나서 문제도 없었고, 너무 좋은 시간이었다”고 말했다. 가는 정이 있으면 오는 정이 있을 법 하다.
            </TextComment>
          )
          : type === "qoh" ? (
            <TextComment>
              류현진은 팀 동료의 도움과 함께 시종일관 신중한 투구를 이어가며 팀 승리를 지켰다. 부진을 떨치기 위한 노력이 경기 내내 이어졌다. 류현진은 이날 유니폼 상의가 젖을 정도로 땀을 흘리면서 던졌는데 이에 대해 “땀이 굉장히 많이 나기는 했지만 당연히 선수가 적응해야 할 부분”이라며 “수분 보충 충분히 해 주면서 던지면 괜찮다”고 말했다. 속구 구속이 150㎞ 가까이 나온 것에 대해서는 “특별히 뭔가를 한 건 아니고, 오늘 (컨디션이) 좀 좋았던 것 같다. 다른 건 크게 없다”고 설명했다.
            </TextComment>
          )
          : null}
        </Container>
    )
}

Commentary.propTypes = {
  type : PropTypes.string.isRequired
}

export default Commentary;