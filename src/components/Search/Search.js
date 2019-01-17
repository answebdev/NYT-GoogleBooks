import React from "react";
import { Helmet } from "react-helmet";
import "./Search.css";

const Search = () => {
    return (
        <div className="container">
            <Helmet>
                <title>NYT Google Books Search | Search</title>
            </Helmet>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4 jumbo-text">NYT Google Books Search</h1>
                            <p className="lead jumbo-text">Search for and Save Books of Interest</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div class="card">
                        <div className="card-header">
                            <strong>Book Search</strong>
                        </div>
                        <div className="card-body">
                            <div class="form-group">
                                <label for="formGroupExampleInput">Search for a Book</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Harry Potter" />
                            </div>

                            <a href="/" class="btn btn-primary"><i class="fas fa-search"></i> Search</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Search;