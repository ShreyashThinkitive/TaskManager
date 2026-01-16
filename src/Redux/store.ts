import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "../Redux/taskSlice"


const store = configureStore({
    reducer: {
        tasks: taskSliceReducer
    }
})


export default store