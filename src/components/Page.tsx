import React, { useEffect } from "react";

import { PageProps } from "../types";
import { mainTitle } from "../global";

const Page: React.FC<PageProps> = (props) => {
    useEffect(() => {
        document.title = mainTitle +" - "+ props.title;
    }, [props.title]);

    return (
        <div className="page" id={props.id}>
            <article>
                <header>
                    <h1>{props.title}</h1>
                </header>
                <div className="content-container">
                    {props.children}
                </div>
            </article>
        </div>
    );
}

export default Page;
