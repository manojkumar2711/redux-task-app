import { createSlice } from '@reduxjs/toolkit';



const intState = [];

const taskSlice = createSlice({
    name:'TaskDataBase',
    initialState: [],
   reducers: {  
        addTask(state, action) {
            state.push(action.payload)
        },deleteTask(state,action){
  
            const deleteIndex = action.payload
            return state.filter((val,index) => index !== deleteIndex)
        },upDateTask(state,action){
    
            const indx = (action.payload.index)
            const upData = { "title" : action.payload.title ,  "description" : action.payload.description }
            return state.map((state,index)=> index == indx ?  upData  : state) ;
        }

    }
})

export const { addTask , deleteTask , upDateTask} = taskSlice.actions;
export default taskSlice.reducer;
