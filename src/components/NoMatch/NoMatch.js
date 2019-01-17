import React from "react";
import { Helmet } from "react-helmet";

const NoMatch = () => {
    return (
        <div className="container">
            <Helmet>
                <title>NYT Google Books Search | Error</title>
            </Helmet>
            <br />
            <br />
            <div>
                <p>Error Page</p>
            </div>
        </div>
    );
};

export default NoMatch;