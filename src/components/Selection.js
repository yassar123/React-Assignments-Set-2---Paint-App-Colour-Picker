import React, { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
    const { nextBackground, applyColor } = props;
    // console.log(nextBackground)
    const [myColor, setMyColor] = useState("");

    return (
        <div
            className="fix-box"
            onClick={() => applyColor((clr) => setMyColor(clr))}
            style={{ ...myColor }}
        >
            <h2 className="subheading">Selection</h2>
        </div>
    );
};
export default Selection;

