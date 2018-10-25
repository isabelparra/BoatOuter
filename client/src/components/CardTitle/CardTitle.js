import React from "react";
import "./CardTitle.css";

const CardTitle = props => (
    <div
    className={`${props["data-value"]}`}
    {...props}
    />
);

export default CardTitle;