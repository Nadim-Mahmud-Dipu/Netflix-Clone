import React, {useEffect, useState} from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [props.fetchURL]);

    console.table(movies);

    return (
        <div className="row">
            {/* Title */}
            <h2> {props.title}</h2>
            <div className="row_posters">
                {/* Several row_poster(s) */}
                {movies.map(movie => (
                    <img
                        className="row_poster"
                        src={`${base_url}${movie.poster_path}`} alt={movie.name}
                    />
                ))}
            </div>

            {/* Container -> Posters */}
            {/*{movies.map(movie => (*/}
            {/*    <img src="{movie.poster_path}" alt="{movie.name}"/>*/}
            {/*))}*/}
        </div>
    );
}

export default Row;
