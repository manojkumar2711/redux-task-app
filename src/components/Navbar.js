import React from 'react';
import { useSelector } from 'react-redux'; 


const Navbar = () => {
  const count = useSelector((state) =>  state.TaskData.length)
  return (
    <>
      <h3 className='text-center mt-5 text-primary'>Project mangements</h3>
      <p className='text-center'>Currunt {count || "0"} task (s) pending</p>
    </>
  )
}

export default Navbar
