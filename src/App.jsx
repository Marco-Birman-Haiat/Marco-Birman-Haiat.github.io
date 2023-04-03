import { Route, Switch } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';


function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/about' component={ About } />
          <Route exact path='/' component={ Home } />
        </Switch>
    </div>
  )
}

export default App
