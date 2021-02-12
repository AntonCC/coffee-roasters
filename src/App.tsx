import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
//Pages
import Home from './pages/home/home';
import About from './pages/about/about';
import CreatePlan from './pages/create-plan/create-plan'
// Components
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'




const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/create-plan', name: 'CreatePlan', component: CreatePlan}
]

const App: React.FC = () => {
  return (
    <div className="App">
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
