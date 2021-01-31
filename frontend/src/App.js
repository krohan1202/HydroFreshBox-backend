import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Newsletter from './components/Home/Newsletter';

function App() {

  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Newsletter} />
      </Switch> 
      </BrowserRouter> 
    </>
  );
}

export default App;
