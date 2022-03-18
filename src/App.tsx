import { ReactElement, useEffect } from 'react'
import { Route, Router, Switch, useLocation } from 'wouter'
import Home from './pages/home'
import Prayers from './pages/prayers'

function App(): ReactElement {
  const [, setLocation] = useLocation()

  useEffect(() => {
    setLocation('/')
  }, [])

  return (
    <div>
      <Router base="/">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="prayers" component={Prayers} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
