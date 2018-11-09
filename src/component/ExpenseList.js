import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectedExpenses from '../selectors/expenses';
import ExpenseListFilters from './ExpenseListFilter';

const ExpenseList = (props) =>
(
    <div>
        <ExpenseListFilters />
        <h4>ExpenseList</h4>
        <div>
          {
              props.expenses.map(item => 
                { return  <ExpenseListItem key={item.id} {...item}/>
                })
          }
        </div>  
    </div>
);

const mapStateToProps = (state) =>
{
    return {
        expenses : SelectedExpenses(state.expenses , state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
