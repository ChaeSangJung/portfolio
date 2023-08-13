import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 15px;
`;
const TextComment = styled.p`
    font-size: 14px;
    line-height: 1.6;
    strong {
      font-weight: 700;
    }
    div {
      padding: 6px 4px 6px;
      margin-bottom: 7px;
      box-sizing: border-box;
      background: #f7f7f7;
      p {
        font-weight: 700;
      }
    }
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
              <div>
                <p>유지 보수 및 회원 가입하기, 클릭 메뉴 리스트, FAQ페이지, 서브 페이지 리팩토링, 마이 페이지, 검색 및 검색 결과</p>
              </div>
              광고 포탈 사이트입니다.<br/><br/>
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
              <div>
                <p>전체 퍼블리싱</p>
              </div>
              영어 교육을 위한 사이트로 반응형으로 개발된 홈페이지입니다. 기획자와 디자이너가 가이드 및 디자인을 잘 해 주어서 편하게 작업한 기억이 있습니다.<br/><br/>
              페이지가 다소 많지만 비슷한 같은 디자인이 많아 react의 component처럼 만들어 최초의 페이지와 패턴을 제가 만들면 디자이너가 가져다 붙이는 형태로 작업이 이루어졌습니다.<br/><br/>
              특이한 점은 layer popup을 쓰지 않고 새창으로 팝업을 띄웠다는 것입니다.<br/>
              이 부분에서 요구사항이 있어 vanilla js로 작성된 것을 jQuery로 바꿨습니다.<br/>
              1. 사이트가 확장이 되면 팝업이 계속 생길 수 있다.<br/>
              2. vanilla js로 만들면 디자이너가 가져다 붙이는 과정이 힘들다.<br/>
              이러한 요구에 의해 jQuery로 함수를 만들어 id를 받아오면 해당 팝업이 나올 수 있도록 refactoring를 하였습니다.
            </TextComment>
          )
          : type === "qoh" ? (
            <TextComment>
              <div>
                <p>전체 퍼블리싱</p>
              </div>
              큐오홀딩스라는 회사의 소개를 위한 사이트입니다. fullpage jQuery를 이용하여 메인페이지를 작성을 했습니다. 
              넓이가 줄어들어 모바일 넓이에서는 fullpage jQuery가 작동을 안하게끔 구성되어 있습니다.<br/><br/>
              최초 js로 scroll event와 mouse event로 작성을 했으나 계열사 추가 이슈와 ui 변경 이슈가 잦아서 
              제가 만든 js와 맞지 않는 부분이 있어 jQuery를 가져다 썼습니다. 추후에 js로 저만의 fullpage를 만들수 있도록 해야 겠다는 생각이 들었습니다.<br/>
              계열사 추가 이슈가 잦아 개발이 끝난 후에 업데이트가 쉽도록 퍼블 구성하였습니다.
            </TextComment>
          )
          : type === "cms" ? (
            <TextComment>
              <div>
                <p>App과 web의 콘텐츠를 관리할 수 있는 CMS입니다. 전체 퍼블리싱을 하였고 퍼블리싱 후에 backend 개발자가 java,spring을 이용하여 만들었습니다.</p>
              </div>
              
              <strong>메인영상관리</strong> : App의 메인페이지 상단 배너의 영상을 관리하는 곳입니다.<br/>
              배너용 영상을 업로드를 할 수 있고 삭제도 할 수 있습니다. url복사 버튼이 있어 영상업로드 후에 새창에서 url을 손쉽게 복사 후 붙여넣기를 통해 확인할 수 있습니다.<br/>              
              <strong>방송관리</strong> : 라이브 방송을 관리하는 페이지입니다. 방송 상태 중에서 예정, 진행을 클릭하고 들어가면 채팅화면과 방송화면 프롬프터가 나옵니다.<br/>
              <strong>상품관리</strong> : 등록되어 있는 상품들을 관리할 수 있는 페이지입니다.<br/>
              <strong>회원관리</strong> : 회원을 관리할 수 있는 페이지이며 새창을 통해 회원 구분을 변경할 수 있습니다.<br/>
              <strong>지난주문관리</strong> : 5월 이전의 지난 주문을 관리할 수 있는 페이지이며, 주문 상태를 변경할 수 있습니다.<br/><br/>
              <strong>이슈 : 크로스 브라우징</strong><br/>
              1. os : Mac, web-browswer : safari - &lt;col/&gt;에 calc로 witdh 적용 안됨, width는 px과 %로 재 정의<br/>
              2. os: window, web-browswer : Edge - &lt;input type='file' aceept='.mp4' /&gt; window는 파일 선택 창에 모든 파일 보기가 있어서 잘 못된 선택을 할 수 있음, javascript로 accept 가능한 파일 외에 에러 처리<br/>
              3. 채팅, 회원목록 엑셀 저장 시 window에서 글자 깨짐 - blob 설정 시 &#123;type: "text/csv;charset=utf-8;"&#125; 추가
            </TextComment>
          )
          : type === "webview" ? (
            <TextComment>
              <div>
                <p>1. 주문 및 결제하기</p>
                <p>2. 배송지 변경</p>
                <p>3. 주문 및 배송 조회</p>
                <p>4. 주문 상세</p>
                <p>5. 취소,교환, 반품 신청</p>
              </div>
              flow는 크게 다음과 같이 4가지로 볼 수 있습니다.<br/>
              1. 주문서 작성 ➡️ 결제하기 ➡️ 상세내역 보기 ➡️ 주문 내역 보기<br/>
              2. 주문 내역 보기 ➡️ 결제 완료 : 주문 취소하기<br/>
              3. 주문 내역 보기 ➡️ 배송 중 : 배송 조회<br/>
              4. 주문 내역 보기 ➡️ 배송 완료 : 구매확정 하기, 교환/반품하기<br/>
              <br/>
              초안에서 많이 수정이 되어 오랬동안 작업을 했습니다.<br/>
              수정을 요청하면서 기획자와 디자이너랑 많은 이야기를 나눌 수 있었습니다.<br/>
              협의, 회의는 길거나 짧다고 해서 좋은 것이 아니라 나의 이야기를 할 때 상대방의 입장도 생각하기가 중요하다고 많이 느꼈습니다.<br/>
              지금도 회사의 정체성에 맞게 수정 보완 중입니다.<br/>
              web과 app사이의 인터페이스 디버깅을 알게 되었습니다. app개발에도 흥미를 가지게 되었고 기회가 된다면 flutter를 익히고 싶습니다.
            </TextComment>
          )
          : type === "web-project" ? (
            <TextComment>
              <div>
                <p>메인 페이지, 브랜드, 검색 및 검색결과, 카테고리별 페이지, 장바구니와 마이 페이지</p>
              </div>
              <strong>메인페이지</strong> - 최초 단순하게 메인 배너와 카테고리별로 상품 리스트를 보여주는 페이지 였습니다.<br/>
              현재는 UX면을 고려하여 UI가 변경되었지만 최초 만들어 놓은 카테고리별로 상품을 보여주는 Component를 활용하여 메인페이지에서 링크를 통해 볼 수 있는 카테고리별 페이지를 별도 제작하였습니다.<br/>
              이때 만들어 놓은 카테고리별로 상품을 보여주는 Component는 후에 브랜드에서도 활용 되었습니다.<br/>
              <strong>브랜드</strong> - 브랜드에 대한 정보를 알 수 있고 팔로우 할 수 있으며 현재 해당 브랜드의 이벤트를 알 수 있습니다. 브랜드의 해당 상품도 알 수 있습니다.<br/>
              <strong>검색 및 겸색 결과</strong> - 상품을 검색할 수 있고 개인의 최근 검색어를 알 수 있습니다.<br/>
              <strong>장바구니</strong> - 상품을 담아 놓을 수 있고, 수량을 변경할 수 있으며, 장바구니에서 삭제를 할 수 있습니다.<br/>
              <strong>마이페이지</strong> - 말 그대로 나의 정보를 담고 있는 페이지입니다.<br/>
              <br/>
              react/nextjs 조합으로 처음 만들어 보는 커머스 프로젝트였습니다.<br/>
              처음 해보는 커머스 페이지 작업이라 전체 flow를 이해하는 데 애를 먹었지만 기획자, 디자이너와 상의해가며 전체 flow를 이해해가며 작업을 했습니다.
            </TextComment>
          )
          : type === "homepage" ? (
            <TextComment>
              <div>
                <p>빗썸라이브에 처음 입사를 해서 만든 회사 소개 페이지입니다.</p>
              </div>
              
              반응형이며 reactjs, nextjs, typescript를 이용하여 작성을 하였습니다.<br/>
              간단한 회사 소개 페이지인데 reactjs, nextjs, typescript를 사용한 이유는 <br/>
              1. SEO에 대응하기 위하여<br/>
              2. 이 페이지에 커머스 기능을 하는 web project 확장을 하기 위합입니다.<br/>
            </TextComment>
          )
          : type === "tvcPoc" ? (
            <TextComment>
                한국기계산업진흥회와 협력하여 산업부의 의뢰를 받아 진행한 POC(Proof of Concept)입니다. 
                이 프로젝트는 특허와 연계하여 특허의 산업 분야와 무역 상황을 파악할 수 있는 기능을 제공하며, 나아가 인공지능(AI)을 활용하여 '기술개발 로드맵'과 'RFP(Request For Proposal: 프로젝트를 수행할 업체를 선정하기 전에 요구 사항을 정리하여 후보 업체에게 전달하는 문서)'을 제공합니다. 
                이 프로젝트는 저에게 처음으로 리딩을 맡은 경험입니다. 
                또한, 팀원들에게는 처음 사용해보는 라이브러리(am-chart, keylines 등)에 대한 사전 연구를 수행하고, 팀원들에게 가이드를 제공하여 지원했습니다. 
                그 동안에는 useState와 useEffect를 이용하여 데이터 가져오기(fetching) 작업을 수행했으며, 이제는 react-query를 활용하여 get, post, patch 등의 방법을 팀원들에게 가르치며 작업을 진행했습니다.                
                <br/><br/>
                디지털 시각화 분야에 대한 큰 흥미를 자아내게 했습니다. 
                특히, 특허와 무역 상황을 연계하여 시각적으로 표현하는 것은 현실적이고 실질적인 문제 해결에 매우 유용한 접근이었습니다.
                이 프로젝트를 통해 기술과 비즈니스의 융합이 얼마나 강력한 결과를 낼 수 있는지를 몸소 체험하게 되었습니다.
                이러한 흥미와 욕심을 바탕으로 더 다양한 프로젝트에 참여하고 싶은 욕구가 강해졌습니다. 
                다양한 분야에서 디지털 시각화와 기술의 융합을 활용하여 복잡한 문제들을 해결하는 프로젝트에 참여하고 싶다는 생각이 들게 했습니다. 
                예를 들어, 산업의 다양한 영역에서 데이터 분석과 시각화를 통해 생산성을 향상시키거나, 사회문제와 관련된 데이터를 시각화하여 보다 지속 가능한 방향으로 전환하는 프로젝트 등이 가능할 것입니다.
                이를 위해 저는 먼저 관련된 기술과 도구들을 깊이 학습하고, 선행 연구 및 프로젝트를 조사하여 다양한 해결책을 모색할 계획입니다. 
                또한, 학습한 내용을 팀원들과 공유하며 협업하는 과정을 통해 더 큰 성과를 이루고 싶습니다. 
                이런 방식으로 저의 욕심을 실현하기 위해 지속적으로 노력하고 발전해 나가려고 합니다.
            </TextComment>
          )
          :type === "network" ? (
            <TextComment>                
                앞으로 진행할 POC(proof of concept)에 대비하여 관계망 템플릿을 미리 작업하고 있습니다. 
                key-lines(https://keylines.io)에서 제공하는 기능들을 활용하여 다양한 작업을 진행하고 있습니다. 
                이 작업은 노드 크기 조절(기업 규모, 산업 분류 등), 뷰(렌즈 형태, 표준 형태, 구조 형태, 맵과의 연동), 노드의 확장 및 축소, 필터(기업 규모 등), 통계, 병합, 검색, 워드 클라우드, 타임라인, 선택 기능 등을 포함합니다. 
                이러한 기능들을 컴포넌트화하여, 필요한 부분만 선택적으로 사용할 수 있도록 구현하고 있습니다. 
                이로서 나중에 필요한 기능을 필요한 시점에 마치 레고 블록을 조립하듯이 손쉽게 사용할 수 있게 되는 것이 목표입니다.
                <br/><br/>
                마치 레고 블록을 조립하는 것처럼 필요한 기능들을 모듈화하고, 이를 조합하여 프로젝트의 요구사항에 맞게 활용할 수 있는 구조를 만드는 것이 목표입니다. 
                이렇게 함으로써 프로젝트를 효율적으로 관리하고 확장성을 높일 수 있을 것으로 기대하고 있습니다.
                이러한 계획을 실현하기 위해서는 먼저 key-lines과 같은 도구와 기술에 대한 깊은 이해와 숙련이 필요합니다. 
                또한, 컴포넌트화와 모듈화된 접근 방식을 통해 필요한 기능들을 세심하게 분리하고 통합할 수 있어야 합니다. 
                이 과정에서 효율적인 협업과 지속적인 테스트와 개선이 중요한 역할을 할 것입니다. 
                이러한 단계를 통해 미리 준비된 템플릿을 통해 실제 프로젝트를 진행하는 데 성공적인 결과를 이끌어낼 수 있을 것입니다.
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