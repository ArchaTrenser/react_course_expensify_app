import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';

const DashBoardPage = () => {
    return( 
    <div>
        This is the home page
        <ExpenseList />
        <ExpenseSummary />
    </div>)
}
export default DashBoardPage;