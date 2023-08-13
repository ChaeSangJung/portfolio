import React, {useState} from "react";
import List from "Components/List";
import styled from "styled-components";
import { latestDb, contentDb, previosDB, forwardDb } from "DB/generateDb";
import PopWraps from "Components/PopWraps"
import TvContent from "Components/PopContent/TvContent"
import WorksheetContent from "Components/PopContent/WorksheetContent";
import WebviewContent from 'Components/PopContent/WebviewContent';
import WebProjectContents from 'Components/PopContent/WebProjectContents';
import CmsContents from 'Components/PopContent/CmsContents';

const Container = styled.div`
    max-width: 1200px;
    width: 90%;
    padding: 50px 0 50px;
    margin: 0 auto 0;
`;
const WrapContent = styled.div`
    &+div {
        margin-top: 50px;
    }
    .titleContent {
        display: block;
        font-family: "NanumSquare";
        font-size: 20px;
        font-weight: 700;
        color: #2d2d21;
    }
`;
const ListContent = styled.ul`
    margin-top: 30px;
    font-size: 0;
    text-align: left;
    &:after {
        content:"";
        display:block;
        width:0;
        height:0;
        overflow:hidden;
        clear:both;
    }
`

const Main = () => {

    const [isPop, setIsPop] = useState({
        "bool" : false,
        "text" : null
    });
    document.addEventListener("click", (event)=>{
        if(event.target.classList.contains("dim")){
            setIsPop({"bool":false, "text":null});
        }
    });
    
    return (
        <>
            {(isPop.bool && isPop.text === "tvcf") && (
                <PopWraps>
                    <TvContent />
                </PopWraps>
            )}
            {(isPop.bool && isPop.text === "worksheetmaker") && (
                <PopWraps>
                    <WorksheetContent />
                </PopWraps>
            )}
            {(isPop.bool && isPop.text === "webview") && (
                <PopWraps>
                    <WebviewContent />
                </PopWraps>
            )}
            {(isPop.bool && isPop.text === "web-project") && (
                <PopWraps>
                    <WebProjectContents />
                </PopWraps>
            )}
            {(isPop.bool && isPop.text === "cms") && (
                <PopWraps>
                    <CmsContents />
                </PopWraps>
            )}
            {(isPop.bool && isPop.text === "network") && (
                <PopWraps>
                    <div>network</div>
                </PopWraps>
            )}
            {(isPop.bool && isPop.text === "tvcPoc") && (
                <PopWraps>
                    <div>tvc</div>
                </PopWraps>
            )}

            <Container>
                <WrapContent>
                    <strong className='titleContent'>2020년 이후</strong>
                    <ListContent>
                        {latestDb.map((db)=>(
                            <List
                                key={db.id}
                                db={db}
                                column={2}
                                setIsPop={setIsPop}
                            />
                        ))}
                    </ListContent>
                </WrapContent>

                <WrapContent>
                    <strong className='titleContent'>Nomad Coder Challenges</strong>
                    <ListContent>
                        {contentDb.map((db)=>(
                            <List 
                                key={db.id}
                                db={db}
                                column={2}
                                setIsPop={setIsPop}
                            />
                        ))}
                    </ListContent>
                </WrapContent>

                <WrapContent>
                    <strong className='titleContent'>앞으로의 챌린지 계획</strong>
                    <ListContent>
                        {forwardDb.map((db)=>(
                            <List
                                key={db.id}
                                db={db}
                                column={2}
                                setIsPop={setIsPop}
                            />
                        ))}
                    </ListContent>
                </WrapContent>

                <WrapContent>
                    <strong className='titleContent'>2020년 이전</strong>
                    <ListContent>
                        {previosDB.map((db)=>(
                            <List
                                key={db.id}
                                db={db}
                                column={3}
                                setIsPop={setIsPop}
                            />
                        ))}
                    </ListContent>
                </WrapContent>
            </Container>
        </>
    )
}

export default Main;