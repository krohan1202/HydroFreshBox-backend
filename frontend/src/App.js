import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <>
      <h1>Working</h1>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch> 
      </BrowserRouter> 
    </>
  );
}

export default App;
