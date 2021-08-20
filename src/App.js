import './App.css';
import Header from './components/layout/Header'
import { Route, Switch, useHistory } from 'react-router-dom';

import Home from './pages/Home';
import Add from './pages/Add';
import About from './pages/About';
import Single from './pages/Single';

function App() {
  const history = useHistory();

  function addItem(item){
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newItem = { id, ...item }
    // setData([...data, newItem])
    fetch(
      'https://react-crud-cd5ea-default-rtdb.firebaseio.com/items.json',
      {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/')
    });
  } 

  function upadeteItem(obj){
    fetch(
      `https://react-crud-cd5ea-default-rtdb.firebaseio.com/items/${obj.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(obj.item),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/')
    });
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/add'>
          <Add onAdd={addItem} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/single/:id'>
          <Single onUpdate={upadeteItem} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
