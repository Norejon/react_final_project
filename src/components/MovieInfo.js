import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
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
                            <img src={film.poster_path && `https://image.tmdb.org/t/p/w500${film.poster_path}`}/>
                        </div>
                        <div className={css.Info}>
                            <div><b>Name: </b>{film.title} </div>
                            <div><b>Date of release: </b>{film.release_date}</div>
                            <div className={css.Genres}><b>Genres: </b>{film.genres && film.genres.map(value => <Link
                                key={value.id} to={`/${value.id}`}>{value.name}</Link>)}</div>
                            <b>languages:</b>
                            <div> {film.spoken_languages && film.spoken_languages.map(value => <div
                                key={value.iso_639_1}>{value.name}</div>)}</div>
                            <div><b>popularity: </b>{film.popularity}</div>
                            <div><b>Average vote: </b>{film.vote_average}</div>
                            <div><b>Trailers:</b><Videos/></div>
                        </div>
                    </div>
                    <b>Overview: </b><div className={css.Overview}> {film.overview}</div>
                </div>
            </div>
        );
    }
};

export default MovieInfo;