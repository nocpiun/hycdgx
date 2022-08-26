import React, { useEffect } from "react";
import Gitalk from "gitalk";

import Page from "../../components/Page";

// Gitalk style
import "gitalk/dist/gitalk.css";

const Comment: React.FC = () => {
    useEffect(() => {
        const gitalkInstance = new Gitalk({
            clientID: "ee4b38a90d3d378d6aef",
            clientSecret: "5799cb60689c44ee1390e9b1fc1510a56fbc6d2b",
            repo: "hycdgx",
            owner: "nocpiun",
            admin: ["NriotHrreion"],
            number: 1,
            labels: ["Gitalk"]
        });

        gitalkInstance.render("gitalk-instance");
    }, []);

    return (
        <Page id="comment" title="留言板" source="/src/pages/comment/index.tsx">
            <div className="gitalk-container" id="gitalk-instance"></div>
        </Page>
    );
}

export default Comment;
