import React from "react";
import ListContainer from "Components/List";
import { contentDb } from "DB/generateDb";

const Main = () => {
    return (
        <>
            <div>
                <strong>2020년 이후</strong>
            </div>
            <div>
                <strong>Nomad Coder Challenges</strong>
                <ul>
                    {contentDb.map((db)=>(
                        <ListContainer 
                            key={db.id}
                            db={db}
                        />
                    ))}
                </ul>
            </div>
            <div>
                <strong>2020년 이전</strong>
            </div>
        </>
    )
}

export default Main;