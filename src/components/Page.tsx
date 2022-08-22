import React from "react";

import { PageProps } from "../types";

const Page: React.FC<PageProps> = (props) => {
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
