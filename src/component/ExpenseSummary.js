import React from 'react';
import expensetotal from '../selectors/expense-total';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectedExpenses from '../selectors/expenses';

const ExpenseSummary= ({expenseTotal,expenseCount}) =>
{
    return(
    <div>
      <p>Expense Count : {expenseCount}</p>
      <p>Expense Total : {numeral(expenseTotal / 100).format('$0,0.00')}</p>
    </div>)
} 
const mapStateToProps= (state) =>
{
    const visibleExpenses = selectedExpenses(state.expenses,state.filters);
    return {
        expenseCount : visibleExpenses.length , 
        expenseTotal : expensetotal(visibleExpenses)
    };
};
export default connect(mapStateToProps)(ExpenseSummary);