
import React, { useState } from 'react';

export const ListContext = React.createContext();

function ListProvider(props) {
  const [display, setDisplay] = useState(false);

  const state = {
    display,
    setDisplay
  };

  return (
    <ListContext.Provider value={state}>
      {props.children}
    </ListContext.Provider>
  );
}

export default ListProvider;