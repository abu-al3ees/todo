import React from 'react';

import ToDo from './component/todo/todo.js';
import SiteContext from './component/todo/context/site';
import AuthProvider from './component/todo/context/authContext.js';
import Auth from './component/todo/auth/auth.js'
import NavBar from './component/todo/Header';
export default class App extends React.Component {
  render() {
    return (
    <>
      <AuthProvider>
      <NavBar />
            <SiteContext>
  <Auth capability="read">
        <ToDo />
        </ Auth>
        </SiteContext>
        <Auth capability="guest">
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
              <h1>To Do List </h1>
              <p>wlcome singin plz</p>
            </div>
          </Auth>
        </AuthProvider>
        </>
    );
  }
}