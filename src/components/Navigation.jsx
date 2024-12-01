import React from 'react';
import CompImg from '../images/compLogo.png';
import userLogin  from '../images/user-login.png';

const Navigation = () => {
  return (
    <div class="navigationWrapper">  
    <section class="navigation">
        <div class="nav-container">
            <div class="nav-logo">
                 <a href="#!"> {/*<img src= { CompImg } width="100">*/}<b>THE ALPHA WORLD</b></a>
            </div>
            <nav>
                <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                <ul class="nav-list">
                    <li><a href="#!">Dashboard</a></li>
                    <li><a href="#createuser">Create User</a></li>
                    {/*<li><a href="#!"><img src=  width="32" alt="user" class="user"></a>*/}
                        <ul class="navbar-dropdown">
                            <li><a href="#!">Username</a></li>
                            <li><a href="#!">Designation</a></li>
                            <li><a href="#!">Edit Profile</a></li>
                            <li><a href="#!">Logout</a></li>
                        </ul>
                
                </ul>
            </nav>
        </div>
    </section>
    </div>
  )
};

export default Navigation;