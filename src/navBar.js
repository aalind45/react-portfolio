import {NavLink, Outlet} from  'react-router-dom';
import {navTabs} from './routes';

const NavBar = () => {
    const Tab = ({tab}) => {
        return <NavLink to={tab.path} 
        className={(e) => {
            return e.isActive ? 'Nav-Tab-Active' : 'Nav-Tab'
        }} >
            {tab.displayName}
        </NavLink>;
    }

    return <nav className='Navigation-panel'>
        {navTabs.map(tab => 
            <Tab key={`${tab.id}-tab`} tab={tab}/>
        )}
    </nav>;
}

const NavBarWrapper = () => {
    return(
      <>
        <NavBar navTabs={navTabs} />
        <Outlet />
      </>
    );
  }

export default NavBarWrapper;