import { Route, Routes } from 'react-router-dom';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Home from './pages/home/home';
import Skills from './pages/skills/skills';
import Experience from './pages/experience/experience';
import Undefined from './pages/undefined/undefined';

export const navTabs = [
    {id: 0, displayName: 'Home', path: '/home', component: Home},
    {id: 1, displayName: 'About', path: '/about', component: About},
    {id: 2, displayName: 'Skills', path: '/skills', component: Skills},
    {id: 3, displayName: 'Projects', path: '/projects', component: Projects},
    {id: 4, displayName: 'Work Experience', path: '/experience', component: Experience}
];

const AppRoutes = () => {
    return <main className='Content'>
        <Routes>
            <Route index Component={Home} />
            {navTabs.map(tab => 
                <Route 
                    key={`${tab.id}-route`} 
                    path={tab.path} 
                    exact 
                    Component={tab.component}
                />
            )}
            <Route path={'*'} Component={Undefined} />
        </Routes>
    </main>
};

export default AppRoutes;