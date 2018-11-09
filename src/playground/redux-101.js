console.log(101);
import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1 }) =>(
{
    type : 'INCREMENT' ,
    incrementBy
});

const decrementCount = ({decrementBy = 1}) =>
({
    type : 'DECREMENT' ,
    decrementBy
});

const resetCount = () =>
({
    type : 'RESET'
});

const setCount = ({ id }) =>
({
    type : 'SET' , 
    id

});

const createReducer =((state ={ count :0} ,action) =>
{
    switch(action.type)
    {
        case 'INCREMENT' : return {count : state.count + action.incrementBy};
        case 'DECREMENT' : return {count : state.count - action.decrementBy};
        case 'RESET'     : return {count : 0};
        case 'SET'       : return {id : action.id};

        default : return state;
    }
    
});
const store = createStore(createReducer);

store.subscribe( ()=>
    {
     console.log(store.getState());
    }
);

store.dispatch(decrementCount({ decrementBy : 7}));

store.dispatch(resetCount());

store.dispatch(incrementCount({  incrementBy : 5 }));

store.dispatch(setCount({ id : 101 }));


