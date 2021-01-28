import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';

const GlobalStyle = createGlobalStyle`
  body {
    background:#fff;
    min-height:100vh;
    margin:0;
    color:black;
    font-family:'Kaushan Script';
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
