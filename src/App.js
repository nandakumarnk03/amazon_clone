import React from "react"; 
import "./App.css";
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {

/* useEffect(() => {
    //will only run once when the app component loads...

    auth.onAuthStateChange(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) */
    
  return (
    // BEM
    <Router>
     <div className="App">
    

        <Switch>       
          <Route path="/login">
            <Login />
          </Route> 
          <Route path="/checkout">   
            <Header />        
            <Checkout />
          </Route>
          <Route path="/payment">   
            <Header /> 
            <Payment />      
          </Route>
          <Route path="/">     
            <Header />     
           <Home />
          </Route>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
