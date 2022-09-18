import React from "react";
import '../index.css';

function Switcher(props) {

  return (
    <button className="button button-switch"><img src={props.imageUrl} alt="" /></button>
  );
}

export default Switcher;
