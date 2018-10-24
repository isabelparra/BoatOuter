import React from "react";
import "./CardTitle.css";

const CardTitle = props => (
    <p
    className={`${props["data-value"]}`}
    {...props}
    />
);

export default CardTitle;