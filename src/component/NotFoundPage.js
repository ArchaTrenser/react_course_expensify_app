import React from 'react';
import {Link} from 'react-router-dom';
const NotFoundPage = () =>
(    <div>
        <b>404!</b>
        <Link to = "/">Go Home</Link>
    </div>
);
export default NotFoundPage;