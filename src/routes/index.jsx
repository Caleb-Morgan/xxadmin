import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'

import { Provider } from 'mobx-react'
import stores from 'stores'

import Home from 'routes/home'
import About from 'routes/about'
import LoginPage from 'routes/login'

const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  </HashRouter>
)

const App = () => (
  <Provider {...stores}>
    <Routes />
  </Provider>
)

export default App