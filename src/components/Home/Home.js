import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div className="container">
            <Helmet>
                <title>NYT Google Books Search</title>
            </Helmet>
            <br />
            <br />
            <div>
                <p>Home Page</p>
            </div>
        </div>
    );
};

export default Home;