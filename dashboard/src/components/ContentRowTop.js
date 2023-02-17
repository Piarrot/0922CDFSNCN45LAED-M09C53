import React from "react";
import GenresInDb from "./GenresInDb";
import ContentRowMovies from "./ContentRowMovies";
import MovieList from "./MovieList";
import { Route, Switch } from "react-router-dom";
import LastMovieInDB from "./LastMovieInDb";

function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <Switch>
                <Route path="/" exact>
                    <MovieList />
                </Route>
                <Route path="/charts">
                    <ContentRowMovies />
                </Route>
                <Route path="/genres">
                    <GenresInDb />
                </Route>
                <Route path="/last-movie">
                    <LastMovieInDB />
                </Route>
                <Route>
                    <h1>404</h1>
                </Route>
            </Switch>
        </div>
    );
}
export default ContentRowTop;
