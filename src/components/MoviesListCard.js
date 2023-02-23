import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './css_components/Card.module.css'
import GenreBadge from "./GenreBadge";
import {genreActions} from "../rudux/slices/genreSlice";
import StarRatings from "react-star-ratings/build/star-ratings";


const MoviesListCard = ({movie}) => {
    const {id, original_title, poster_path, genre_ids, vote_average} = movie;

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state);

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch])
    const genresArr = genres.genres


    return (
        <div className={css.mainCard}>
            <div className={css.RatingBlock}><StarRatings
                rating={vote_average / 2}
                starRatedColor="yellow"
                numberOfStars={5}
                changeRating={null}
                name='rating'/></div>
            <Link className={css.Card} to={id.toString()} state={{movie}}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                <div>{original_title}</div>
            </Link>
            <div className={css.Ganres}>
                {genre_ids.map(id =>
                    <div key={id}>{genresArr.map(genre => id == genre.id &&
                        <GenreBadge key={genre.id} genre={genre}/>)}</div>
                )}
            </div>
            <br/>
        </div>
    );
};

export default MoviesListCard;