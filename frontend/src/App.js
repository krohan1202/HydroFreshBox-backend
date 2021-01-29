import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Newsletter from './Newsletter';

function App() {
  return (
    <>
      <h1>Working</h1>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Newsletter} />
      </Switch> 
      </BrowserRouter> 
    </>
  );
}

export default App;
