import React from "react";
import "./Tile.css"

function Tile({children}) {
    return (
        <>
            <div>
                {children}
                <div>
                Test
                </div>
            </div>

        </>
    )
}

export default Tile;