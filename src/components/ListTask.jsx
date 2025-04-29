import React from 'react'
import Task from './Task'
import AddTask from './AddTask'
import { useSelector, useDispatch } from 'react-redux'
import { showAddTask, filterTasks, setFilterValue } from '../redux/slices/todoSlice'

const ListTask = () => {
    const tasks = useSelector((state) => state.todo.tasks)
    const showAddTaskComponent = useSelector((state) => state.todo.showAdd)
    const filterValue = useSelector((state) => state.todo.filterValue)
    const dispatch = useDispatch()

    const handleAddComponent = () => {
        dispatch(showAddTask())
    }

    const handleFilter = (e) => {
        const value = e.target.value
        dispatch(setFilterValue(value))
        dispatch(filterTasks(value))
    }

    return(
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3 p-2 border rounded bg-light" id="list-header">
                <h4 className="mb-0">Todo List</h4>
                <div>
                    <button className="btn btn-success me-2" onClick={handleAddComponent} disabled={showAddTaskComponent}>Add Todo</button>
                    <select className="form-select form-select-sm d-inline-block w-auto" onChange={handleFilter} value={filterValue}>
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="not-done">Not Done</option>
                    </select>
                </div>
            </div>
            <div>
            {showAddTaskComponent?<AddTask/>:""}
            {
                tasks.map((task)=>(
                    <Task key={task.id} id={task.id} description={task.description} isDone={task.isDone}/>
                ))
            }
            </div>
        </div>
    )
}

export default ListTask