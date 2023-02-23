import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

import css from "./css_components/Header.module.css"

import Genres from "./Genres";
import UserInfo from "./UserInfo";

const Header = () => {

    const {register, handleSubmit} = useForm({mode: "all"});

    const [value, setValue] = useState(0);

    const genres = async () => {
        if (value == 0) {
            const v = 1;
            setValue(v)
        } else if (value == 1) {
            const v = 0;
            setValue(v)
        }
    }


    return (
        <div>
            <div className={css.Header}>
                <h3><Link className={css.Links} to={'/movies/'}>Фільми</Link></h3>
                <h3 placeholder={'genres'} {...register('genres')} onClick={handleSubmit(genres)}>Жанри</h3>
                <div><UserInfo/></div>
            </div>
            {value == 1 && <Genres/>}
        </div>
    );
};

export default Header;
