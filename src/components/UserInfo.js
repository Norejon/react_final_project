import React from 'react';

import css from "./css_components/Header.module.css";

const UserInfo = () => {
    return (
        <div>
            <p>XxXShadowXxX</p><img className={css.ImgAcount}
                                    src={'https://emojio.ru/images/apple-b/1f464.png'}/>
        </div>
    );
};

export default UserInfo;