import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div className="container">
            <Helmet>
                <title>NYT Google Books Search</title>
            </Helmet>
            <br />
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">NYT Google Books Search</h1>
                    <p className="lead">Welcome to NYT Google Books Search. Feel free to search for your favorite books and save them.</p>
                    <hr className="my-4" />
                    <p>Click on the Search button below to begin searching.</p>
                    <a className="btn btn-primary btn-lg" href="/search" role="button">Search</a>
                </div>
            </div>
        </div>
    );
};

export default Home;