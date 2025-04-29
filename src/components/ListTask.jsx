import React from 'react'
import Task from './Task'
import AddTask from './AddTask'
import { useSelector, useDispatch } from 'react-redux'
import { showAddTask } from '../redux/slices/todoSlice'

const ListTask = () => {
    const tasks = useSelector((state) => state.todo.tasks)
    const showAddTaskComponent = useSelector((state) => state.todo.showAdd)
    const dispatch = useDispatch()

    const handleAddComponent = () => {
        dispatch(showAddTask())
    }

    return(
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3 p-2 border rounded bg-light" id="list-header">
                <h4 className="mb-0">Todo List</h4>
                <div>
                    <button className="btn btn-success me-2" onClick={handleAddComponent} disabled={showAddTaskComponent}>Add Todo</button>
                    <select className="form-select form-select-sm d-inline-block w-auto">
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="not-done">Not Done</option>
                    </select>
                </div>
            </div>
            {showAddTaskComponent?<AddTask/>:""}
            {
                tasks.map((task)=>(
                    <Task key={task.id} id={task.id} description={task.description} isDone={task.isDone}/>
                ))
            }
        </div>
    )
}

export default ListTask