import React from 'react';
import ReactDOM from 'react-dom' ;
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'; 
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './style/style.scss';

const store = configureStore();

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx,document.getElementById('one'));


/*

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
  });
  
store.dispatch(addExpense({ description: 'Water Bill' , amount :5400}));
store.dispatch(addExpense({description : 'Gas Bill'}));
store.dispatch(addExpense({description : 'Rent Bill' ,amount : 300 ,createdAt :1200}));

store.dispatch(setTextFilter(''));

*/