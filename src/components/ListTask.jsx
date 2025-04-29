import React from 'react'
import Task from './Task'
import {tasks} from '../assets/tasks'
import AddTask from './AddTask'

const ListTask = () => {

    return(
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3 p-2 border rounded bg-light" id="list-header">
                <h4 className="mb-0">Todo List</h4>
                <div>
                    <button className="btn btn-success me-2">Add Todo</button>
                    <select className="form-select form-select-sm d-inline-block w-auto">
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="not-done">Not Done</option>
                    </select>
                </div>
            </div>
            {<AddTask/>}
            {
                tasks.map((task)=>(
                    <Task key={task.id} Id={task.id}/>
                ))
            }
        </div>
    )
}

export default ListTask