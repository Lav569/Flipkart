import React from "react";
import "./Buttons.css";
function Buttons(props){
    return (
      <div>
        <button type="Submit" className="Buttons">{props.value}</button>
      </div>
    );
};
export default Buttons;