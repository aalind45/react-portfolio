import {Link} from  'react-router-dom';
import { useState } from 'react';
import _ from 'lodash';

const getCurrTab = (navTabs) => {
    let currTab = [navTabs[0]];
    currTab = navTabs.filter(tab => tab.path === window.location.pathname)
    return currTab[0];
};

const NavBar = (props) => {
    const {navTabs} = props;
    const [currTab, setCurrTab] = useState(getCurrTab(navTabs));
    const Tab = ({tab}) => {
        return <Link 
        to={tab.path} 
        className={_.isEqual(currTab, tab) ? 'Nav-Tab-Active' : 'Nav-Tab'} 
        onClick={(e) => setCurrTab(tab)}>
            {tab.displayName}
        </Link>;
    }

    return <nav className='Navigation-panel'>
        {navTabs.map(tab => 
            <Tab key={`${tab.id}-tab`} tab={tab}/>
        )}
    </nav>;
}

export default NavBar;