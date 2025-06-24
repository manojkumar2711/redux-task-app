import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './UpdateTask';
import { deleteTask } from '../slice/functionSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const TaskList = () => {
  const [modalShow, setModalShow] = useState(false);
  const taskData = useSelector((state) => state.TaskData);
  const dispatch = useDispatch();

  const [editData , setEditData] = useState({});

  const ListUpdate = (data,index) => {

  
    setModalShow(true);
    setEditData({data,index});

  };

  const ListDelete = (index) => {

    dispatch(deleteTask(index));
    //    const sampleData = taskData.filter((data,index) =>  index !== indx);
  };


  return (
    <>

      <Table striped bordered hover className='mt-5'>
        <thead>
          <tr className='text-center'>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {taskData.map((data, index) =>

            <tr className='text-center' key={index}>
              <td>{index + 1}</td>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>  <Button variant="primary" className='me-4' onClick={() => ListUpdate(data , index)}><i className="bi bi-pencil-square"></i></Button>
                <Button variant="primary" onClick={() => ListDelete(index)}><i className="bi bi-trash3"></i></Button></td>
            </tr>
          )}
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        editData={editData}
      />

    </>
  )
}

export default TaskList;
