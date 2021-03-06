import React, { useEffect, useContext } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { WidthContext } from './contexts/widthContext'
import debounce from './helperFuncs/debounce'
//Pages
import Home from './pages/home/home';
import About from './pages/about/about';
import CreatePlan from './pages/create-plan/create-plan'
// Components
import ScrollTop from './components/scroll-top/scroll-top'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'


const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/create-plan', name: 'CreatePlan', component: CreatePlan}
]

const App: React.FC = () => {
  const [width, setWidth] = useContext(WidthContext)

  const debouncedHandleWidth = debounce(() => {
    setWidth(window.innerWidth)
  }, 50)

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleWidth)

    return () => {
      window.removeEventListener('resize', debouncedHandleWidth)
    }
  }, [])

  return (
    <div className="App">
      <ScrollTop />
      <Navbar />
      <Switch>
        {
          routes.map(({ path, name, component}) => (
            <Route key={name} exact path={path} component={component} />
          ))
        }
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
