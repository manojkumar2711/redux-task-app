import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "./slice/functionSlice";

export const store = configureStore({

    devTools: true,
  reducer: {  
       TaskData: taskSliceReducer 
    }
}
)