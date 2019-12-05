import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const { branding } = props;
    return (
        <div>
            {/* <h2>{props.branding }</h2> */}
            {/* <h1 style={{color:"red",fontSize:"50px"}}>{branding }</h1> */}
            {/* <h1>{branding }</h1> */}
            < nav className = "navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0" >
               .<div className="container">
                <a className="navbar-brand" href="/">{branding}</a>
                </div> 
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="fas fa-home"></i>
                            Home
                            </Link>
                            </li>
                        <li className="nav-item">
                            <Link to="/x" className="nav-link">
                                < i className = "fas fa-plus" > </i>
                            Add Contacts
                            </Link>
                            </li>
                        <li className="nav-item">
                            <Link to="/about/1" className="nav-link">
                                < i className = "fas fa-question" > </i>
                            About us
                            </Link>
                            </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
   
}
 Header.defaultProps = {
     branding: "My App"
}
Header.propTypes = {
    branding: PropTypes.string.isRequired
 }
export default Header;  
