import React from "react";

import { LinkProps } from "../types";

const Link: React.FC<LinkProps> = (props) => {
    return <a href={props.to} target="_blank" rel="noreferrer">{props.children}</a>
}

export default Link;
