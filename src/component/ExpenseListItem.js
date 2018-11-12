import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const ExpenseListItem =({id, description , amount , createdAt}) =>
(
    <div>
        <h5><Link to={"/edit/"+id}>{description}</Link></h5>
        <p>
            Amount   :  {numeral(amount / 100 ).format('$0,0.00')}  
            <br></br> 
            CreatedAt  :   {moment(createdAt).format('MMMM Do ,YYYY')}
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