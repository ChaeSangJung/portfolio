import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {usedSkill} from "DB/generateDb";
import SkillBadge from "Components/SkillBadge";

const FooterWrap = styled.div`    
    background-color: #007acc;
`;
const Container = styled.div`
    max-width: 1200px;
    width: 90%;
    padding: 50px 0 50px;
    margin: 0 auto 0;
`

const today = new Date();

const Footer = () => {
    const fullYear = today.getFullYear();
    const [year, setYear] = useState(0); 

    const { skill:skills } = usedSkill;
    
    useEffect(()=>{
        setYear(fullYear);
    },[fullYear]);

    return (
        <FooterWrap>
            <Container>
                <div>
                    {skills.map((skill)=>(
                        <SkillBadge key={skill.id} skill={skill.name}/>
                    ))}
                </div>
                <p>© {year} Che. All rights reserved.</p>
            </Container>
        </FooterWrap>
    )
}

Footer.propTypes= {
    usedSkill : PropTypes.object
}

export default Footer;
