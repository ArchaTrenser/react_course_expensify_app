import {addExpense , removeExpense ,editExpense} from '../../actions/expenses';

test('removeExpense' , () =>
{
    const action = removeExpense({id : '123abc'})
    expect(action).toEqual(
       {
            type : 'REMOVE_EXPENSE',
            id :'123abc'
       }
    ) 
});

test('editExpense' , () =>
{
    const action = editExpense('123abc' ,{note : 'hello'})
    expect(action).toEqual(
        {
            type: 'EDIT_EXPENSE',
            id :'123abc',
            updates : {
                note : 'hello'
            }
        }
    )
})

test('addExpense',() =>
{
    const expenseData = {
        descrpition :'Rent',
        note:'fbgfbgh',
        amount:345,
        createdAt :3500
    };
    const action = addExpense(expenseData);
    expect(action).toEqual(
        {
            type : 'ADD_EXPENSE',
            expense : {
                ...expenseData,
                id : expect.any(string)
            }
        }
    )
})