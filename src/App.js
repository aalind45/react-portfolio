import './App.css';
import Home from './pages/home/home';
import Undefined from './pages/undefined/undefined';
import NavBar from './navBar';
import Footer from './footer';
import Header from './header';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import {navTabs} from './routes';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: NavBar,
      children: [
        {
          path: '/',
          Component: Home
        },
        ...navTabs,
        {
          path: '*',
          Component: Undefined
        }
      ]
    },
  ], 
  { basename: window.origin.includes('github') ? "/react-portfolio" : ''});

  return (
    <div className="App">
      <Header />
      <main className="Content">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
