import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Data from './Data/Index.json'
import Home from './HomePage/Home'
import Front from './HomePage/Front'
import MD from './Components/MD'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Front} />
        <Route exact path='/home' component={Home} />
        {
          Data['all'].map(e => 
              <Route path={`/${e}`} render={() => <MD mdURL={e} />} />
          )
        }
      </Switch>
    </div>
  );
}
export default App;
