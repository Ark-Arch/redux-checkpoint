import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "../../assets/tasks";

export const initialState = {
    tasks,
    showAdd: false,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const id = state.tasks.length + 1
            const description = action.payload
            const isDone = false
            state.tasks.push({
                id,
                description,
                isDone                
            })
            state.showAdd = false
        },
        deleteTask: (state, action) => {
            // expecting action to be the id of a single task object
            const tasks = state.tasks.filter((task) => task.id !== action.payload )
            state.tasks = tasks.map((task, index) => (
                {
                    ...task,
                    id: index+1
                }
            ))
        },
        showAddTask: (state) => {
            state.showAdd = true
        }
    }
})

export const {addTask, deleteTask, showAddTask} = todoSlice.actions
export default todoSlice.reducer
