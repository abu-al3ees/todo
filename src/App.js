import React from 'react';

import ToDo from './component/todo/todo.js';
import SiteContext from './component/todo/context/site';
export default class App extends React.Component {
  render() {
    return (
    
            <SiteContext>

        <ToDo />
        </SiteContext>

    );
  }
}