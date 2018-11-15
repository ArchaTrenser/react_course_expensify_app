import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter ,{ history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login ,logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import {firebase} from './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LoaderPage from './components/LoaderPage';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRender = false;

const renderApp =() =>
{
  if(!hasRender)
  {
    ReactDOM.render(jsx, document.getElementById('one'));
    hasRender = true;
  }
}

ReactDOM.render(<LoaderPage />, document.getElementById('one'));

firebase.auth().onAuthStateChanged((user)=>
{
  if(user)
  {
    console.log('login')
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/')
      {
        history.push('/dashboard');
      }
    });
  }
  else
  {
    console.log('logout')
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
})
