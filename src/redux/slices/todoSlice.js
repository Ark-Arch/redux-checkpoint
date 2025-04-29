import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "../../assets/tasks";

export const initialState = {
    tasks: tasks,
    alltasks:tasks,
    showAdd: false,
    isEdit: false,
    filterValue: 'all'
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setFilterValue: (state,action) => {
            state.filterValue = action.payload
        },
        addTask: (state, action) => {
            const id = state.alltasks.length + 1
            const description = action.payload
            const isDone = false
            description? state.alltasks.push({
                id,
                description,
                isDone                
            }) : ''
            state.showAdd = false
            if (state.filterValue === 'all'){
                state.tasks = state.alltasks
            } else if (state.filterValue === 'not-done') {
                state.tasks.push({
                    id, description, isDone
                })
            }
        },
        deleteTask: (state, action) => {
            // expecting action to be the id of a single task object
            const tasks = state.alltasks.filter((task) => task.id !== action.payload )
            state.alltasks = tasks.map((task, index) => (
                {
                    ...task,
                    id: index+1
                }
            ))
            state.tasks = state.alltasks
        },
        showAddTask: (state) => {
            state.showAdd = true
        },
        editTask: (state, action) => {
            const toEdit = state.isEdit

            state.alltasks = action.payload ? 
            state.alltasks.map((task)=>(
                task.id === toEdit ? {
                    ...task, description:action.payload, isDone:false
                }: task
            )): state.alltasks
            state.isEdit = false

            state.tasks = state.alltasks
        },
        shouldEdit: (state, action) =>{
            state.isEdit = action.payload
        },
        doneToggle: (state, action) => {
            const task = state.alltasks.find((task)=> task.id === action.payload.doneId)
            if (task) task.isDone = action.payload.doneValue
            state.tasks = state.alltasks
        },
        filterTasks: (state, action) => {
            
            if (action.payload === 'done') {
                state.tasks = state.alltasks.filter((task) => task.isDone === true)
            } else if (action.payload === 'not-done') {
                state.tasks = state.alltasks.filter((task) => task.isDone === false)
            } else {
                state.tasks = state.alltasks
            }
        }
    }
})

export const {addTask, deleteTask, showAddTask, editTask, shouldEdit, doneToggle, filterTasks, setFilterValue} = todoSlice.actions
export default todoSlice.reducer
