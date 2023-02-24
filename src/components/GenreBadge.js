import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import css from './css_components/GenreBadge.module.css'
import MoviesList from "./MoviesList";

const GenreBadge = ({genre}) => {
    const {name, id} = genre

    const {register, handleSubmit} = useForm({mode: "all"});

    const [value, setValue] = useState();

    const genres = async () => {
        setValue(name)
    }
    const scroll = () => {
        window.scrollTo({
            top: 450,
            left: 500,
            behavior: 'smooth'
        });
    }

    return (

        <div className={css.Badge} placeholder={'genres'} {...register('genres')} onClick={handleSubmit(genres)}
             onClickCapture={scroll}>
            <Link to={`/${id}`} state={{value}}>{name}</Link>
            
        </div>
    );
};

export default GenreBadge;