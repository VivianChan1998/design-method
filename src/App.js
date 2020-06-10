import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Data from './Data/Index.json'
import Home from './HomePage/Home'
import NavBar from './Components/NavBar'
import MD from './Components/MD'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        {
          Data['all'].map(e => 
              <Route path={`/${e}`} render={() => <MD mdURL={Data['content'][e]['md']} />} />
          )
        }
      </Switch>
    </div>
  );
}
export default App;
