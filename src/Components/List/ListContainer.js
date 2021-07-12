import React from "react";
import PropTypes from "prop-types";
import styled, {keyframes} from "styled-components";
import Thumnail from "Components/Thumnail";
import SkillBadge from "Components/SkillBadge";
import Commentary from "Components/Commentary";

const Spin = keyframes`
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
`;

const Item = styled.li`
    position: relative;
    display: inline-block;
    width: ${(props)=>(
        props.column === 2 ? `calc(50% - 4px)` 
        :props.column === 3 ? `calc(33% - 4px)`
        :`100%`)
    };
    height: ${(props)=>(props.column > 2 && !props.fixedHeight ? `145px` : `auto`)};
    padding: 10px 10px 10px;
    margin: 5px 2px 5px;
    background-color: #fff;
    vertical-align: top;
    box-sizing: border-box;
    border: 1px dashed #ccc;
`;
const BoxUpper = styled.div`
    font-size: 0;
    text-align: left;
`;
const BoxText = styled.div`
    display: inline-block;
    width: ${(props)=>(props.column > 2 && !props.fixedHeight ? `100%` : `65%`)};;
    padding: 0 0 0 20px;
    vertical-align: top;
    box-sizing: border-box;
`;
const TextTile = styled.p`
    font-size: 15px;
    color: #333;
`;
const LinkPrj = styled.a`
    margin-left: 5px;
    i {
        color: #e48d1d;
    }
    &:hover {
         i {
             color: #805e32;
         }
    }
`;
const TextEtc = styled.p`
    position: relative;
    margin-top: 20px;
    font-size: 15px;
    line-height: 1.5;
    color: #333;
`;
const DivSkill = styled.div`
    margin-top: 10px;
`;
const MoreBtn = styled.button`
    position: relative;
    background: transparent;
    border: none;
    cursor: pointer;
    top: 2px;
    i {
        font-size: 20px;
        color: #2472a9;
    }
    &:hover {
        i {
            color: #12517d;
            animation: ${Spin} 0.5s linear 1;
        }
    }
`
const TextBoxTitle = styled.span`
    position: relative;
    display: inline-block;
    padding-right: 12px;
    font-weight: 700;
`;

const ListContainer = ({db, column, setIsPop}) => {
    

    return (
        <Item column={column} fixedHeight={db.contents}>
            <BoxUpper>
                {db.thum ? (
                    <Thumnail project={db.name} />
                ) : null}
                
                <BoxText column={column} fixedHeight={db.contents}>
                    <TextTile>
                        {db.title ? (
                            <TextBoxTitle>
                                {db.title}
                            </TextBoxTitle>
                        ) : null}
                        {db.state ? (` (${db.state})`) : null} 
                        {db.url ? (<LinkPrj href={db.url} target="blank"><i className="fas fa-link"></i></LinkPrj>) : null}
                        {db.hasMoreBtn ? (
                            <MoreBtn onClick={()=>{setIsPop({"bool":true, "text":db.name})}}><i className="fas fa-plus-circle"></i></MoreBtn>
                            
                        ) : null}
                    </TextTile>
                    {db.todo ? (
                        <TextEtc>{db.todo}{db.etc ? (`(${db.etc})`) : null}</TextEtc>
                    ) : null}
                    {db.spc ? (
                        <TextEtc>{db.spc}</TextEtc>
                    ) : null}
                    <DivSkill>
                        {db.skill.map((skill)=>(
                            <SkillBadge key={skill.id} skill={skill.name} />
                        ))}
                    </DivSkill>
                </BoxText>
            </BoxUpper>
            {/* 각 프로젝트 별 Componet */}
            {db.contents ? (
                <Commentary type={db.name} />
            ) : null}
            
            
        </Item>
    )
}

ListContainer.propTypes = {
    db : PropTypes.object,
    colum: PropTypes.number,
    setIsPop: PropTypes.func
}

export default ListContainer;