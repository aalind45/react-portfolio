import './App.css';
import NavBar from './navBar';
import Footer from './footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';
import AppRoutes, {navTabs} from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar navTabs={navTabs} />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
