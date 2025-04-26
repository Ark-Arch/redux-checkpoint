import React from 'react'

const Task = ({Id}) => {
    return(
        <div className="d-flex align-items-center border p-3 rounded mb-2" style={{width:'800px'}} id={`task${Id}`}>
        <div className="me-3" id="taskId">
            #taskId
        </div>
        <div className="me-auto" id="taskTitle">
            #taskTitle
        </div>
        <div className="d-flex align-items-center">
            <button className="btn btn-primary btn-sm me-2" id="editButton">Edit</button>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="isDoneToggle" />
            <label className="form-check-label" htmlFor="isDoneToggle">Done</label>
            </div>
        </div>
        </div>
    )
}

export default Task