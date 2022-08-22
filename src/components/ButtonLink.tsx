import React from "react";

import { ButtonLinkProps } from "../types";

const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
    const clickHandle = () => {
        if(props.newtab) {
            var newWindow = window.open("about:blank");
            if(newWindow) newWindow.location.href = props.to;
        } else {
            window.location.href = props.to;
        }
    };

    return (
        <button onClick={() => clickHandle()}>
            {props.children}
        </button>
    );
}

export default ButtonLink;
