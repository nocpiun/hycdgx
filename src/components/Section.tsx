import React from "react";

import { PageSectionProps } from "../types";

const Section: React.FC<PageSectionProps> = (props) => {
    return (
        <>
            <hr />
            <section id={props.title}>
                <h3>{props.title}</h3>

                {props.children}
            </section>
        </>
    );
}

export default Section;
