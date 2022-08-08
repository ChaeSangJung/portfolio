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
                state를 관리해서 필요한 부분만 다시 생성한다. 라는 개념도 신선했고 Componet를 재사용한다는 것도 흥미로웠습니다. 
                어렵고 힘은 들었지만 가장 재미있게 한 챌린지입니다. <br/>
                지금도 react의 새로운 개념을 익히면 이곳에다가 적용을 해봅니다.<br/>
                class형으로 되어 있는 것을 hook으로 refactoring하기, state hook, effect hook 등으로 
                저만의 hook을 만들어 사용해 보기, 챌린지 기간에 강의 시간에는 useReducer를 쓸 일이 없었지만 
                익혀서 이곳에다가 사용해 보기 등 새로운 것을 알게 될 때마다 적용해 보는 일종의 테스트 베드(?)같은 곳이 되었습니다.<br/>
                좋은 frontend 개발자는 좋은 js 개발자다 라는 생각이 든 챌린지였습니다. 
                궁극적으로는 typescript로 refactoring하기입니다.
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
              광고 포탈 사이트입니다.<br/>
              반응형이 아닌 페이지였지만 전반적으로 반응형으로 재구축을 했습니다.<br/>
              회원가입 페이지에는 네이버, 페이스북, 구글로 회원가입하기 기능을 붙였습니다.<br/>
              추가된 기능 들 중 썸네일에 mouse hover를 했을 때 마우스가 움직이는 대로 배경이 바뀌는 썸네일을 순수 javascript로 만들었습니다.<br/>
              ajax와 javascript를 이용하여 나중에 보기, 재생목록 등에 저장 해 놓기, youtube에 있는 기능들을 구현했습니다.<br/>
              ajax와 javascript를 이용하여 filtering이 가능한 서브페이지들도 만들었습니다.
              위의 기능 외에 UI를 전반적으로 개편했습니다.<br/>
            </TextComment>
          )
          : type === "worksheetmaker" ? (
            <TextComment>
              영어 교육을 위한 사이트로 반응형으로 개발된 홈페이지입니다. 기획자와 디자이너가 가이드 및 디자인을 잘 해 주어서 편하게 작업한 기억이 있습니다.<br/>
              페이지가 다소 많지만 비슷한 같은 디자인이 많아 react의 component처럼 만들어 최초의 페이지와 패턴을 제가 만들면 디자이너가 가져다 붙이는 형태로 작업이 이루어졌습니다.<br/>
              특이한 점은 layer popup을 쓰지 않고 새창으로 팝업을 띄웠다는 것입니다.<br/>
              이 부분에서 요구사항이 있어 vanilla js로 작성된 것을 jQuery로 바꿨습니다.<br/>
              1. 사이트가 확장이 되면 팝업이 계속 생길 수 있다.<br/>
              2. vanilla js로 만들면 디자이너가 가져다 붙이는 과정이 힘들다.<br/>
              이러한 요구에 의해 jQuery로 함수를 만들어 id를 받아오면 해당 팝업이 나올 수 있도록 refactoring를 하였습니다.
            </TextComment>
          )
          : type === "qoh" ? (
            <TextComment>
              큐오홀딩스라는 회사의 소개를 위한 사이트입니다. fullpage jQuery를 이용하여 메인페이지를 작성을 했습니다. 
              넓이가 줄어들어 모바일 넓이에서는 fullpage jQuery가 작동을 안하게끔 구성되어 있습니다.<br/>
              최초 js로 scroll event와 mouse event로 작성을 했으나 계열사 추가 이슈와 ui 변경 이슈가 잦아서 
              제가 만든 js와 맞지 않는 부분이 있어 jQuery를 가져다 썼습니다. 추후에 js로 저만의 fullpage를 만들수 있도록 해야 겠다는 생각이 들었습니다.<br/>
              계열사 추가 이슈가 잦아 개발이 끝난 후에 업데이트가 쉽도록 퍼블 구성하였습니다.
            </TextComment>
          )
          : type === "cms" ? (
            <TextComment>
              이슈: 크로스 브라우징
            </TextComment>
          )
          : type === "webview" ? (
            <TextComment>
              flow는 크게 다음과 같이 4가지로 볼 수 있습니다.<br/>
              1. 주문서 작성 ➡️ 결제하기 ➡️ 상세내역 보기 ➡️ 주문 내역 보기<br/>
              2. 주문 내역 보기 ➡️ 결제 완료 : 주문 취소하기<br/>
              3. 주문 내역 보기 ➡️ 배송 중 : 배송 조회<br/>
              4. 주문 내역 보기 ➡️ 배송 완료 : 구매확정 하기, 교환/반품하기<br/>
              <br/>
              초안에서 많이 수정이 되어 오랬동안 작업을 했습니다.<br/>
              수정을 요청하면서 기획자와 디자이너랑 많은 이야기를 나눌 수 있었습니다.<br/>
              협의, 회의는 짧다고 좋은 것이 아니라 상대방의 입장을 고려하기가 중요하다고 많이 느꼈습니다.<br/>
              지금도 회사의 정체성에 맞게 수정 보완 중입니다.<br/>
            </TextComment>
          )
          : type === "web" ? (
            <TextComment>
              장바구니, 마이 페이지
            </TextComment>
          )
          : type === "hompage" ? (
            <TextComment>
              빗썸라이브에 처음 입사를 해서 만든 작업물입니다. 회사 소개 페이지조차 없어서 급하게 만든 회사 소개 페이지입니다.<br/>
              반응형이며 reactjs, nextjs, typescript를 이용하여 작성을 하였습니다.<br/>
              간단한 회사 소개 페이지인데 reactjs, nextjs, typescript를 사용한 이유는 <br/>
              1. SEO에 대응하기 위하여<br/>
              2. 이 페이지에 커머스 기능을 하는 web project 확장을 하기 위합입니다.<br/>
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