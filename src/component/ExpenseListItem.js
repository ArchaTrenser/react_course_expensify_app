import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const ExpenseListItem =({id, description , amount , createdAt}) =>
(
    <div>
        <h5><Link to={"/edit/"+id}>{description}</Link></h5>
        <p>
            Amount {amount}   
            CreatedAt {createdAt}
        </p>
    </div>
);

const mapToStateProps = (state) =>
{
    return {
        expenses : state.expenses
    }
}

export default connect(mapToStateProps)(ExpenseListItem);