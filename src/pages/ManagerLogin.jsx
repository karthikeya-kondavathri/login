import React from 'react';
import { useNavigate } from 'react-router-dom';
import DubaiImg from '../images/dubaiLogo.png';
import CompImg from '../images/compLogo.png';


const ManagerLogin = () => {
    const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/managerdashboard');
  };
  return(
    <>
    <div className="grid mainLoginWrapper">
        <div className="loginLS gridCmpltCenter">
            <img className="logo" src={ DubaiImg } alt="Logo"/>
            <img className="compLogo" src= { CompImg } alt=" Company Logo"/>
        </div>
        <div className="gridCmpltCenter loginRS"> 
            <form className="loginForm gridCmpltCenterCol" name="loginForm" action="" onSubmit={handleLogin}>
                <h1 className="loginTitle">Regional Manager Log In</h1>
                <div className="gridCmpltCenterCol">
                    <input className="ip" name="" id="" placeholder="User Name" />
                    <input className="ip" name="" id="" placeholder="Use Code" />
                    <input className="ip" name="" id="" placeholder="Password" />
                    <div className="gridEnd fgtPas">
                        <a href="forgetpassword.html">Forgot Password?</a>
                    </div>
                    <div className="loginBtnWrapper">
                        <input className="primaryBtns loginBtn" type="submit" name="" value="Login" id="" />
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
  )
};

export default ManagerLogin;
