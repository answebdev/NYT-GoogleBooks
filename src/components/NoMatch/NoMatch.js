import React from "react";
import { Helmet } from "react-helmet";

const NoMatch = () => {
    return (
        <div className="container">
            <Helmet>
                <title>NYT Google Books Search | Error</title>
            </Helmet>
            <br />

            {/* Source: https://bootsnipp.com/snippets/eo5VD */}
            <div class="container">
                <div className="jumbotron">
                    <div className="text-center"><i className="far fa-frown" style={{ color: "#d9534f", fontSize: "48px" }}></i></div>
                    <br />
                    <h1 className="text-center">404 Not Found<p> </p><p><small className="text-center"> Oh noes everything broke</small></p></h1>
                    <p className="text-center">Try pressing the back button or clicking on this button.</p>
                    <p className="text-center"><a class="btn btn-primary" href="/"><i className="fa fa-home"></i> Take Me Home</a></p>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;