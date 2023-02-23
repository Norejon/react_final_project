import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <div>Page NotFound</div>
            <Link to={'/'}>Back To Main Page</Link>
        </div>
    );
};

export default NotFoundPage;