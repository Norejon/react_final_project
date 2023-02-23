import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../rudux";
import {useParams} from "react-router-dom";
import Video from "./Video";
import css from '../css_components/Videos.module.css'

const Videos = () => {


    const video = useSelector(state => state);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(movieActions.getVideos(id))
    }, [dispatch, id])

    const videos = video.movies.videos.results;

    const trailers = videos && videos.filter(v => v.type == 'Trailer');

    return (
        <div className={css.Block}>
            {trailers && trailers.map(trailer => <Video key={trailer.id} trailer={trailer}/>)}
        </div>
    );
};

export default Videos;