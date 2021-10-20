import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Components/Login/Login';
import Chat from './Components/Chat/Chat';
import PrivateRoute from './Components/PrivateRoute';
import { FirebaseAuth } from './Firebase';
import { setUser, addUser, fetchMessages } from './Redux/ActionCreator';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = FirebaseAuth.onAuthStateChanged((user) => {
      dispatch(setUser(user))
      if (user) {
        addUser(user).then(() => dispatch(fetchMessages(user)))
      }
    })
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <PrivateRoute path="/">
        <Chat />
      </PrivateRoute>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  )
}

export default App;
