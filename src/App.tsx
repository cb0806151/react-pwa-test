import { ReactElement, useEffect } from 'react'
import { Route, Router, useLocation } from 'wouter'
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
        <Route path="/">
          <Home />
        </Route>
        <Route path="/prayers">
          <Prayers />
        </Route>
      </Router>
    </div>
  )
}

export default App
