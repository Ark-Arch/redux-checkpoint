import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/slices/todoSlice';

const Task = ({id, description, isDone}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(id))
    }

    return(
        <div className="d-flex align-items-center border p-3 rounded mb-2" style={{width:'1000px'}} id={`task${id}`}>
            <div className="me-3" id="taskId">
                {id}
            </div>
            <div className="me-auto" id="taskTitle">
                {description}
            </div>
            <div className="d-flex align-items-center">
                <button className="btn btn-primary btn-sm me-2 btn-danger" id="deleteButton" onClick={handleDelete}>Delete</button>
                <button className="btn btn-primary btn-sm me-2 btn-warning" id="editButton">Edit</button>
                <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="isDoneToggle" />
                <label className="form-check-label" htmlFor="isDoneToggle">Done</label>
                </div>
            </div>
        </div>
    )
}

export default Task