import React, {useEffect} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../rudux";
import css from './css_components/MoveInfo.module.css'
import Videos from "./video/Videos";

const MovieInfo = () => {
    const dispatch = useDispatch();
    const movie = useSelector(state => state);
    const {id} = useParams();

    useEffect(() => {
        dispatch(movieActions.getById(id));
    }, [dispatch], id)
    const film = movie.movies.movies

    if (film) {
        return (
            <div>
                <div className={css.Page}>
                    <div className={css.Movie}>
                        <div>
                            <img src={film && `https://image.tmdb.org/t/p/w500${film.poster_path}`}/>
                        </div>
                        <div className={css.Info}>
                            <div>name: {film.title} </div>
                            <div>Date of release: {film.release_date}</div>
                            <div className={css.Genres}>genres: {film.genres && film.genres.map(value => <Link
                                key={value.id} to={`/${value.id}`}>{value.name}</Link>)}</div>
                            languages:
                            <div> {film.spoken_languages && film.spoken_languages.map(value => <div
                                key={value.iso_639_1}>{value.name}</div>)}</div>
                            <div>popularity: {film.popularity}</div>
                            <div>Average vote: {film.vote_average}</div>
                            <div>Trailers:<Videos/></div>
                        </div>
                    </div>
                    <div className={css.Overview}>overview: {film.overview}</div>
                </div>
            </div>
        );
    }
};

export default MovieInfo;