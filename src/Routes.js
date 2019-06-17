import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sample from './Sample'
import PageUsingApolloState from './PageUsingApolloState'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/sample" component={Sample} />
      <Route path="/page-using-apollo-state" component={PageUsingApolloState} />
      <Route path="/" component={Sample} />
    </Switch>
  </Router>
)

export default Routes
