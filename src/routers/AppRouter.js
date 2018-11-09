import React from 'react';
import { BrowserRouter ,Route ,Switch} from 'react-router-dom';
import DashBoardPage from '../component/DashBoardPage';
import HelpExpensePage from '../component/HelpExpensePage';
import AddExpensePage from '../component/AddExpensPage';
import EditExpensePage from '../component/EditExpensePage';
import NotFoundPage from '../component/NotFoundPage';
import Header from '../component/Header';

const AppRouter= () =>
(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={DashBoardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpExpensePage}/>
            <Route component={NotFoundPage} />
        </Switch>
        </div>    
    </BrowserRouter>
);

export default AppRouter;