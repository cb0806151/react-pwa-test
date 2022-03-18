import { ReactElement } from 'react'
import { Route, Router, Switch } from 'wouter'
import Home from './pages/home'
import Prayers from './pages/prayers'

function App(): ReactElement {
  return (
    <div>
      <Router base="/react-pwa-test">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/prayers" component={Prayers} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
