import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="brand">
                <a href="/"> S30 Users </a>
            </div>
            <div className="menu-links">
                <Link to="/"> Home </Link>
                <Link to="/new-user"> New User </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;