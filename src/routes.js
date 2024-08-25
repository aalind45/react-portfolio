import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Home from './pages/home/home';
import Skills from './pages/skills/skills';
import Experience from './pages/experience/experience';

export const navTabs = [
    {id: 0, displayName: 'Home', path: '/home', Component: Home},
    {id: 1, displayName: 'About', path: '/about', Component: About},
    {id: 2, displayName: 'Skills', path: '/skills', Component: Skills},
    {id: 3, displayName: 'Projects', path: '/projects', Component: Projects},
    {id: 4, displayName: 'Work Experience', path: '/experience', Component: Experience}
];