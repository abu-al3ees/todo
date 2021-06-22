import React from 'react';
import {Button} from 'react-bootstrap';


import  { useState } from 'react';
import { If, Then } from 'react-if';
import Form from 'react-bootstrap/Form';

import { FormControl } from 'react-bootstrap';


function TodoList(props) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [value, setValue] = useState('');

  const toggleField = (id) => {
    setOpen(!open);
    setId(id);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateItem(id, value);
    toggleField();
  };
    return (
      <>
        <ul >
          {props.list.map(item => (
        
            <li as="li" className={`complete-${item.complete.toString()}`} key={item._id}>
              <span type="onClick" onClick={() => props.handleComplete(item._id)}>
                {item.text}
              </span>
              <button  onClick={() => props.deleteItem(item._id)}>Delete</button>
              <button onClick={() => toggleField(item._id)}>Update Item</button>
            </li>
              
          ))}
        </ul >

<If condition={open === true}>
<Then>
<Form className=" update" >
  <FormControl placeholder="update " onChange={(e) => setValue(e.target.value)}/>
  <Button variant="primary" onClick={(e) => handleSubmit(e)}>Submit</Button>
</Form>
</Then>
</If>
</>
      );
}

export default TodoList;