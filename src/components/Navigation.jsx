import React from 'react';
import CompImg1 from '../images/compLogo1.png';
import userLogin  from '../images/user-login.png';
import '../pages/common';

const Navigation = () => {
  return (
    <div className="navigationWrapper">  
    <section className="navigation">
        <div className="nav-container">
            <div className="nav-logo">
                 <a href="#!"> <img src= "" width="100"/><b>THE ALPHA WORLD</b></a>
            </div>
            <nav>
                <div className="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                <ul className="nav-list">
                    <li><a href="#!">Dashboard</a></li>
                    <li><a href="#createuser">Create User</a></li>
                    <li><a href="#!"><img src={ userLogin }  width="32" alt="user" className="user"/></a>
                        <ul className="navbar-dropdown">
                            <li><a href="#!">Username</a></li>
                            <li><a href="#!">Designation</a></li>
                            <li><a href="#!">Edit Profile</a></li>
                            <li><a href="#!">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
    </div>
  )
};

export default Navigation;