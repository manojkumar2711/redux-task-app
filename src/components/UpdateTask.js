import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { upDateTask } from '../slice/functionSlice';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';

const MyVerticallyCenteredModal = ({ onHide, show, editData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(()=>{
    if(editData.data){
      setTitle(editData.data.title);
      setDescription(editData.data.description);
    }
  },[editData])


  const UpdateTask = () => {
    const upData ={ "title" : title , "description" : description , "index" : editData?.index };
        console.log(upData);
    dispatch(upDateTask( upData));
 
    onHide();
  }

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Task Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e) => (setTitle(e.target.value))} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Task Description</Form.Label>
              <Form.Control type="text" placeholder="Task Description" value={description} onChange={(e) => (setDescription(e.target.value))} />
            </Form.Group>



          </Form>
        </Modal.Body>
        <Modal.Footer>

          <div>
            <Button variant="primary" onClick={(e) => UpdateTask(e)}>
              upadted Task
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MyVerticallyCenteredModal;
