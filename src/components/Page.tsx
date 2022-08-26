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
                <footer>
                    <a href={"https://github.com/nocpiun/hycdgx/blob/main"+ props.source} target="_blank" rel="noreferrer">在Github编辑此页面</a>
                </footer>
            </article>
        </div>
    );
}

export default Page;
