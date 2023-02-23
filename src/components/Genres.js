import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genreActions} from "../rudux/slices/genreSlice";
import GenreBadge from "./GenreBadge";
import css from './css_components/Header.module.css'

const Genres = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state);

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch])
    const genresArr = genres.genres


    return (
        <div className={css.Genres}>
            {genresArr && genresArr.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;