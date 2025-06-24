import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { addTask } from '../slice/functionSlice';
import { useDispatch } from 'react-redux';

const Addtask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskData, setTaskData] = useState([]);
  const dispatch = useDispatch();


  const AddTask = (e) => {

    if (title && description) {
      dispatch(addTask({ title, description }));
      setTitle("");
      setDescription("");
    }

  };

  return (
    <>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e) => (setTitle(e.target.value))} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Task Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Task Description" value={description} onChange={(e) => (setDescription(e.target.value))} />
        </Form.Group>

        <div className='text-end'>
          <Button variant="primary" onClick={(e) => AddTask(e)}>
            Add Task
          </Button>
        </div>

      </Form>

     
    </>
  )
}

export default Addtask
