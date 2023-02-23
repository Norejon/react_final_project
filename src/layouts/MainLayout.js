import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {useForm} from "react-hook-form";

import Header from "../components/Header";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import css from './MainLayout.module.css'


const MainLayout = () => {

    const {register, handleSubmit} = useForm({mode: "all"});

    const [them, setThem] = useState(css.White);


    const switchTheme = async () => {
        if (them == css.White) {
            const v = css.Dark;
            setThem(v)
        } else if (them == css.Dark) {
            const v = css.White;
            setThem(v)
        }
    }


    return (
        <div className={them}>
            <div className={css.Button}>
                <button onClick={handleSubmit(switchTheme)}>{them == css.Dark &&
                    <img src={'https://emojio.ru/images/apple-b/1f319.png'}></img> || them == css.White &&
                    <img src={'https://emojio.ru/images/apple-b/2600-fe0f.png'}></img>}</button>
                <div className={css.Logo}>My Okten film Project</div>
            </div>
            <Header/>
            <MoviesPage/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;