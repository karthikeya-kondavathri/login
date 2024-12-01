import React from 'react'

function CreateUser() {
  return (
    <>
    <h1>CU</h1>
    <div class="popup" id="createuser" >
    <a href="#" class="close">×</a>
    <h2>Create User</h2>
    <form class="gridCmpltCenterCol" name="loginForm" action="">
        <div class="gridCmpltCenterCol">
            <input class="ip" name="" id="" placeholder="Create Email Id" />
            <div class="loginBtnWrapper">
                <input class="primaryBtns loginBtn" type="submit" name="" value="Create User" id="" />
            </div>
        </div>
    </form>
    </div> 
    <a href="#" class="close-popup"></a>
    </>
  )
}

export default CreateUser;