import React from 'react'


const AddTask =() => {

    return(
        <div className="d-flex align-items-center border p-3 rounded mb-2" style={{width:'800px'}}>
            <div className="me-auto" id="taskTitle">
                <input type="text" />
            </div>
            <div className="d-flex align-items-center">
                <button className="btn btn-primary btn-sm me-2" id="doneButton">Done</button>
            </div>
        </div>
    )
}

export default AddTask