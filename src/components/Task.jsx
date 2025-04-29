import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, shouldEdit, editTask, doneToggle} from '../redux/slices/todoSlice';
import { useRef } from 'react';

const Task = ({id, description, isDone}) => {
    const isEdit = useSelector((state) => state.todo.isEdit)
    const dispatch = useDispatch();
    const descriptionRef = useRef()
    const handleDelete = () => {
        dispatch(deleteTask(id))
    }

    const handleShouldEditTask = () => {
        const toEditId = id
        dispatch(shouldEdit(toEditId))
    }
    const handleEditTask = () => {
        const newDescription = descriptionRef.current.value
        dispatch(editTask(newDescription))
    }

    const handleIsDone = () => {
        const doneId = id
        const doneValue = !isDone
        dispatch(doneToggle({doneId, doneValue}))
    }

    return(
        <div className="col-12 col-md-12 d-flex align-items-center border p-3 rounded mb-2" id={`task${id}`}>
            <div className="me-3" id="taskId">
                {id}
            </div>
            <div className="me-auto" id="taskTitle">
                {!(id === isEdit) ? 
                description
                :
                <input 
                type="text" 
                ref={descriptionRef} 
                className="form-control form-control-sm me-1" 
                placeholder="Edit task..." 
                style={{ minWidth: '100%' }}/>}
            </div>
            <div className="d-flex align-items-center">
                {
                    (id === isEdit)? (
                        <button className="btn btn-primary btn-sm ms-2 me-2 btn-warning" id="editted" onClick={handleEditTask}>Edit</button>
                    ):(
                        <>
                        <button className="btn btn-primary btn-sm ms-2 me-2 btn-danger" id="deleteButton" onClick={handleDelete}>Delete</button>
                        <button className="btn btn-primary btn-sm me-2 btn-warning" id="editButton" onClick={handleShouldEditTask}>Edit</button>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="isDoneToggle" checked={isDone} onChange={handleIsDone}/>
                            <label className="form-check-label" htmlFor="isDoneToggle">Done</label>
                        </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Task