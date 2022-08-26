import React from "react";
import Gitalk from "gitalk/dist/gitalk-component";

import Page from "../../components/Page";

// Gitalk style
import "gitalk/dist/gitalk.css";

const Comment: React.FC = () => {
    return (
        <Page id="comment" title="留言板" source="/src/pages/comment/index.tsx">
            <Gitalk options={{
                clientID: "ee4b38a90d3d378d6aef",
                clientSecret: "5799cb60689c44ee1390e9b1fc1510a56fbc6d2b",
                repo: "hycdgx",
                owner: "nocpiun",
                admin: ["NriotHrreion"],
                number: 1,
                labels: ["Gitalk"]
            }}/>
        </Page>
    );
}

export default Comment;
