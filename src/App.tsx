import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sign from './sign/Sign';
import GlobalStyle from './GlobalStyle';
import LoadingScreen from './pages/LoadingScreen';
import colors from './ui/colors';

const AppFrame = styled.div`
  background-color: #121212;
  font-family: font-family: 'Signika', sans-serif;
  font-size: 1rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  * {

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }
  
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #080705; 
        border-radius: 6px;
        background-color: #d7d7d7;
        border-top: 2px solid #76550e;
        border-bottom: 2px solid #76550e;
    }
  
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${colors['blue.200']}; 
        border-radius: 6px;
    }
  
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${colors['blue.300']}; 
    }

  }

  /* Works on Firefox */
  * {
      scrollbar-width: 5px;
      scrollbar-color: #080705 rgba(50,50,50,.2);
  }

  a, input[type="color"] {
      text-decoration: none;
      color: inherit;
      &:active, &:visited {
          color: inherit;
      }
  }
`;

const AppWrap = styled.div`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  // overflow: hidden;
`;

const Builder = React.lazy(() => import('./map-builder/Builder'));

function App() {
  return (
    <AppWrap>
      <header className="App-header">
          <GlobalStyle/>
              <React.Suspense fallback={<LoadingScreen/>}>
                <Router>
                  <Switch>
                    <AppFrame>
                        <Sign>                  
                        <Route path="/" exact={true} component={Builder} />
                          <Route path="/circ-builder" render={
                          () => <Builder/>
                        } />
                      </Sign>
                    </AppFrame>
                  </Switch>
                </Router>
              </React.Suspense>
      </header>
    </AppWrap>
  );
}

export default App;
