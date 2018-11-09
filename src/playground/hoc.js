import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>
(
    <div>
        <h1>INFO</h1>
        <p>This is the info for : {props.info}</p>
    </div>
);

const adminWarning = (WrappedComponent) =>
{
    return (props) => (
    <div>
        {props.isAdmin && <p>It's an Admin</p>}
        <WrappedComponent {...props}/>
    </div>
    );
}
const AdminInfo = adminWarning(Info);

const requireAuthentication = (WrappedComponent) =>
{
    return (props) =>
    (
        <div>
            {props.isAuth ?( <WrappedComponent {...props}/> ) : <p>Please log in to see the details </p>}
        </div>
    )
}
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info = " ADMIN "/>, document.getElementById('one'));
ReactDOM.render(<AuthInfo isAuth={true} info = " authenicated ADMIN "/>, document.getElementById('one'));