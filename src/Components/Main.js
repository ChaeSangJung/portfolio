import React from "react";
import ListContainer from "Components/List";
import { contentDb } from "DB/generateDb";

const Main = () => {
    return (
        <ul>
            {contentDb.map((db)=>(
                <ListContainer 
                    key={db.id}
                    db={db}
                />
            ))}
        </ul>
    )
}

export default Main;