import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";

import {movieActions} from "../rudux/slices/movieSlice";
import MoviesListCard from "./MoviesListCard";
import css from './css_components/MovieList.module.css'


const MoviesList = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state);
    const [query, setQuery] = useSearchParams({page: '1'});


    const {register, handleSubmit} = useForm({mode: "all"});
    const [filtred, setFiltred] = useState();

    const genre = useLocation().pathname.slice(1);
    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}));
    }, [dispatch, query, genre])


    const films = movies.movies.results;

    const submit = async (search) => {
        const filtred = films && (films.filter(f => f.title.includes(search.search)));
        const FBG = films && films.filter(f => f.genre_ids.includes(Number(genre)))
        const filtredAll = FBG && FBG.filter(f => f.title.includes(search.search))
        if (genre == 'movies/') {
            setFiltred(filtred)
        } else {
            setFiltred(filtredAll)
        }
    }


    const filtredByGenres = films && films.filter(f => f.genre_ids.includes(Number(genre)))

    return (
        <div onMouseMove={handleSubmit(submit)}>
            <div>
                <button onMouseMove={handleSubmit(submit)} className={css.NavButton} disabled={query.get('page') < 2}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>Prev
                </button>
                <button onMouseMove={handleSubmit(submit)} className={css.NavButton}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>Next
                </button>
            </div>

            <div>

                <hr/>
                Пошук: <input type={"text"} placeholder={'search'} {...register('search')}
                              onKeyUp={handleSubmit(submit)} />

            </div>

            <div className={css.List}>
                {
                    filtred !== '' && filtred && filtred.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                    ||
                    genre !== 'movies/' && filtredByGenres && filtredByGenres.map(movie => <MoviesListCard
                        key={movie.id} movie={movie}/>) & filtred == '' && handleSubmit(submit)
                    ||
                    films && films.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }</div>

        </div>
    );
};

export default MoviesList;