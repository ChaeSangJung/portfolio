import React, {useState} from "react";
import ListContainer from "Components/List";
import styled from "styled-components";
import { latestDb, contentDb, previosDB, forwardDb } from "DB/generateDb";
import PopWraps from "Components/PopWraps"
import TvContent from "Components/PopContent/TvContent"

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
`;
const ContentTitle = styled.strong`
    display: block;
    font-family: "NanumSquare";
    font-size: 20px;
    font-weight: 700;
    color: #2d2d21;
`;
const List = styled.ul`
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
            setIsPop({"bool":false, "text":null})
        }
    });
    
    return (
        <>
            {isPop.bool && isPop.text === "tvcf" ? (
                <PopWraps>
                    <TvContent />
                </PopWraps>
                ) : isPop.bool && isPop.text === "worksheetmaker" ? (
                    <PopWraps>
                        <p>pop2</p>
                    </PopWraps>
                ) : null
            }
            <Container>
                <WrapContent>
                    <ContentTitle>2020년 이후</ContentTitle>
                    <List>
                        {latestDb.map((db)=>(
                            <ListContainer 
                                key={db.id}
                                db={db}
                                column={2}
                                setIsPop={setIsPop}
                            />
                        ))}
                    </List>
                </WrapContent>

                <WrapContent>
                    <ContentTitle>Nomad Coder Challenges</ContentTitle>
                    <List>
                        {contentDb.map((db)=>(
                            <ListContainer 
                                key={db.id}
                                db={db}
                                column={2}
                                setIsPop={setIsPop}
                            />
                        ))}
                    </List>
                </WrapContent>

                <WrapContent>
                    <ContentTitle>앞으로의 챌린지 계획</ContentTitle>
                    <List>
                        {forwardDb.map((db)=>(
                            <ListContainer 
                                key={db.id}
                                db={db}
                                column={2}
                                setIsPop={setIsPop}
                            />
                        ))}
                    </List>
                </WrapContent>

                <WrapContent>
                    <ContentTitle>2020년 이전</ContentTitle>
                    <List>
                    <List>
                        {previosDB.map((db)=>(
                            <ListContainer 
                                key={db.id}
                                db={db}
                                column={3}
                                setIsPop={setIsPop}
                            />
                        ))}
                    </List>
                    </List>
                </WrapContent>
            </Container>
        </>
    )
}

export default Main;