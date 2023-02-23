import React from 'react';

import css from '../css_components/Videos.module.css'

const Video = ({trailer}) => {
    const {key} = trailer;
    return (
        <div>
            <iframe className={css.Video} src={`https://www.youtube.com/embed/${key}`}/>
        </div>
    );
};

export default Video;