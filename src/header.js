import axios from "axios";

const Header = () => {
    return <header className="Header">
        {'My Portfolio'}
        {/* <button onClick={() => axios.get('http://localhost:5000/hi').then(res => console.log(res.data))}>Hit Server</button> */}
    </header>;
};

export default Header;