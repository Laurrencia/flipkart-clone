import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import logoplusstar from "./images/logoplusstar.png";
function Navigation(){
    return(
        <div className="header">
        <nav className="nav">
            <div className="nav-logo">
                <Link to='/' className="logo"><img src={logo} alt="navlogo"/></Link>
                <div className="plus">
                    <i>Explore <span>Plus</span></i>
                    <img src={logoplusstar} alt="starlogo"/>
                </div>
            </div>
            <div className="searchHold">
            <input type="text" placeholder="search for products,brands and more" name="search"/>
            </div>
            <div className="nav-link">
                <div className="linkHold"><Link className="link">Login</Link></div>
                <div className="linkHold">Become a seller</div>
                <div className="linkHold">More <span></span></div>
                <div><Link className="link">Cart</Link></div>
            </div>

        </nav>
        </div>
    );
}

export default Navigation;