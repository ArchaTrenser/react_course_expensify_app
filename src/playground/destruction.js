//Object destructing

const book = {
    title : 'Ego is the Enenmy' , 
    author : 'Ryan Hoilday' ,
    publisher : 
    {
        name : 'Penguin'
    }
}

const {name : publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

//Array destructing

const item = ['Coffee (hot)','$2.00' ,'$2.50' ,'$2.75'];
const [coffee, ,cost] = item;
console.log(`A  medium ${coffee} costs ${cost}`);


import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

/*
//Add Expense
const addExpense = (
    {
        description = '',
        note= '',
        amount= 0,
        createdAt= 0
    } ={}) =>
    ({type: 'ADD_EXPENSE',
      expense: 
      {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
     }
});

//Remove Expense
const removeExpense = ({id} = {}) =>
({
    type : 'REMOVE_EXPENSE',
    id
});

//Edit Expense
const editExpense =(id,amount) =>
({
    type: 'EDIT_EXPENSE',
    id,
    amount
});


//SetText
const setText = (text= ' ') =>
({
    type : 'SETTEXT_FILTER',
    text
});


//Sortbydate
const sortbydate =() =>
({
    type : 'SORT_BY_DATE' ,
    sortBy : 'date'
});

//Sortbyamount
const sortbyamount =() =>
({
    type : 'SORT_BY_AMOUNT' ,
    sortBy : 'amount'
});

//SetStartDate
const setStartDate = (startDate) =>
({
    type : 'SET_START_DATE',
    startDate
});

//SetEndDate
const setEndtDate = (endDate) =>
({
    type : 'SET_END_DATE',
    endDate
});


const expenseReducer= (state= [], action) =>
{
    switch(action.type)
    {
        case 'ADD_EXPENSE' :  return [...state , action.expense];
        case 'REMOVE_EXPENSE' : return state.filter(({id}) =>  id !== action.id );
        case 'EDIT_EXPENSE' : return state.map((expense) =>
        {
            if(expense.id === action.id)
              return {...expense , ...action.amount}
            else
              return expense;  
        });
        default: return state;
    }
};

// Filters Reducer
const filtr= {
        text: ' ',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
}
const filtersReducer= (state= filtr, action) =>
{
    switch(action.type)
    {
        case 'SETTEXT_FILTER' : return { ...state ,text: action.text };
        case 'SORT_BY_DATE' : return { ...state , sortBy: action.sortBy};
        case 'SORT_BY_AMOUNT' : return { ...state , sortBy: action.sortBy};
        case 'SET_START_DATE' : return {...state , startDate : action.startDate};
        case 'SET_END_DATE' : return {...state , endDate : action.endDate};
        default: return state;
    }
};

const store= createStore(combineReducers({
         expenses:  expenseReducer,
         filters: filtersReducer
    })
);

const getVisibileExpenses = (expenses , filters) =>
{
    return expenses.filter((expense) =>
    {
        const startDate = typeof filters.startDate !== 'number' || expense.createdAt >= filters.startDate;
        const endDate = typeof filters.endDate !== 'number' || expense.createdAt <= filters.endDate;
        const textDate = expense.description.toLowerCase().includes(filters.text.toLowerCase());
        return startDate && endDate && textDate;
    }).sort((a, b) =>
    {
        if(filters.sortBy === 'date')
        {
            a.createdAt > b.createdAt ? 1 : -1;
        }
        else if(filters.sortBy === 'amount')
        {
            a.amount < b.amount ? 1 : -1 ;
        }

    });
};

store.subscribe( () =>
   { 
       const state = store.getState();
       const visibleExpense = getVisibileExpenses(state.expenses , state.filters);
       console.log(visibleExpense);
   }
);

const expenseOne = store.dispatch(addExpense({description:'rent' , amount : 100 , createdAt : 10}));
const expenseTwo =  store.dispatch(addExpense({description:'purchase' , amount : 300 , createdAt : 10}));

store.dispatch(removeExpense({id : expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id , {amount :500}));

store.dispatch(setText('rent'));
store.dispatch(setText());

store.dispatch(sortbyamount());
store.dispatch(sortbydate());

 const date = Date();
 store.dispatch(setStartDate(0));
 store.dispatch(setStartDate({startDate : date}));
 store.dispatch(setEndtDate(999));

const demoState = {
    expenses: [{
        id: '123432',
        description: 'Rent',
        note: 'This was the final payment for that address',
        amount:54500,
        createdAt: 0 
    }],
    filters :
    {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
*/