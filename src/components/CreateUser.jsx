import React from 'react'

function CreateUser() {
  return (
    <>
    <div className="popup" id="createuser" >
    <a href="#" className="close">×</a>
    <h2>Create User</h2>
    <form className="gridCmpltCenterCol" name="loginForm" action="">
        <div className="gridCmpltCenterCol">
            <input className="ip" name="" id="" placeholder="Create Email Id" />
            <div className="loginBtnWrapper">
                <input className="primaryBtns loginBtn" type="submit" name="" value="Create User" id="" />
            </div>
        </div>
    </form>
    </div> 
    <a href="#" className="close-popup"></a>
    </>
  )
}

export default CreateUser;