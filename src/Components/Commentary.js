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
                Frontend라는 새로운 세상이 있다는 것을 알게 해준 챌린지였습니다.
                부끄러운 과거의 이야기이지만
                api를 쓴다는 것은 ajax를 통해 php 개발자들이 하는 걸로 알고 있었던 저에게
                fetch가 무었이며, rest api가 무었인지 알게 해준 챌린지였습니다.
                한 단계 나아갈 수 있는 계기가 되었던 챌린지였습니다.
            </TextComment>
          )
          : type === "python_challenge" ? (
            <TextComment>
                javascript 외에 처음 접해 본 언어입니다.
                python을 접하면서 data의 타입 등 javascript에도 기본이 되는 개념들을 다시 정립할 수 있었습니다.
                파이썬을 익힌 계기는 알고리즘 등 코딩테스트를 대비하기 위해서였습니다.
                알고리즘, 데이터 구조를 익히고 알게 되면서 
                js로 코드를 만들 때 다시 한번 생각을 하며 
                간결하고 누구나 보면 알 수 있는 코드를 만드는 데 공을 들이는 계기가 되었습니다.
                Django, Flask를 배우면서 database 살짝이지만 알 수 있었습니다.
                Django, Flask를 다시 접할 기회가 없어서 기억이 희미하지만
                다시 익히고 또 익혀서 side project를 할 때 Backend부터 Frontend까지 혼자 해보고 싶습니다.
            </TextComment>
          )
          : null}
        </Container>
    )
}

Commentary.propTypes = {
    project : PropTypes.string.isRequired
}

export default Commentary;