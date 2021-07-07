import React from "react";
import PropTypes from "prop-types";

const ListContainer = ({db}) => {
    
    return (
        <li>
            <p>{db.title ? db.title : null} {db.url ? (<a href={db.url} target="blank"><i className="fas fa-link"></i></a>) : null}</p>
            {db.etc ? (
                <p>{db.etc}</p>
            ) : null}
            
            {db.skill.map((skill)=>(
                <div key={skill.id}>
                    {skill.name}
                </div>
            ))}
            {/* 각 프로젝트 별 Componet */}
            {db.name === "react_challenge" ? (
                <div>
                    {db.title} content
                    <img src={require(`../../images/noPosterSmall.png`).default} alt={db.name} />
                </div>
            ) : db.name === "project2" ? (
                <div>project2 content</div>
            ) : null}
        </li>
    )
}

ListContainer.propTypes = {
    db : PropTypes.object
}

export default ListContainer;