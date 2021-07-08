import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Thumnail from "Components/Thumnail";
import SkillBadge from "Components/SkillBadge";
import Commentary from "Components/Commentary";



const Item = styled.li`
    display: inline-block;
    width: ${(props)=>(
        props.column === 2 ? `calc(50% - 4px)` 
        :props.column === 3 ? `calc(33% - 4px)`
        :`100%`)
    };
    height: ${(props)=>(props.column > 2 && !props.fixedHeight ? `117px` : `auto`)};
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
    width: 65%;
    padding: 0 10px 0;
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
    margin-top: 20px;
    font-size: 15px;
    color: #333;
`;
const DivSkill = styled.div`
    margin-top: 20px;
`;

const ListContainer = ({db, column}) => {
    
    return (
        <Item column={column} fixedHeight={db.contents}>
            <BoxUpper>
                {db.thum ? (
                    <Thumnail project={db.name} />
                ) : null}
                
                <BoxText>
                    <TextTile>
                        {db.title ? db.title : null} {db.url ? (<LinkPrj href={db.url} target="blank"><i className="fas fa-link"></i></LinkPrj>) : null}
                    </TextTile>
                    {db.etc ? (
                        <TextEtc>{db.etc}</TextEtc>
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
    db : PropTypes.object
}

export default ListContainer;