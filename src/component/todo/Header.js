import React, { useState, useContext } from 'react';
import Signin from '../todo/auth/signup';
import Signup from '../todo/auth/signup';
import { If, Else, Then } from 'react-if';
import { AuthContext } from '../todo/context/authContext';

const NavBar = () => {
  const contextType = useContext(AuthContext);
  const [signinShow, setSigninShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);
  return (
    <nav>
      <nav href="#home">Home</nav>
      <If condition={contextType.loggedIn}>
        <Then>
          <nav>
            <button  onClick={contextType.logout}>
              Logout
            </button>
          </nav>
        </Then>
        <Else>
          <nav> 
            <button onClick={() => setSigninShow(true)}>
              Signin
            </button>

            <button onClick={() => setSignupShow(true)}>
              Signup
            </button>
          </nav>
        </Else>
      </If>
      <Signin show={signinShow} onHide={() => setSigninShow(false)} />
      <Signup show={signupShow} onHide={() => setSignupShow(false)} />
    </nav>
  );
};

export default NavBar;