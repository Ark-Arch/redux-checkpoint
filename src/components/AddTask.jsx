import React from 'react'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { addTask } from '../redux/slices/todoSlice'


const AddTask =() => {
    const descriptionRef = useRef()
    const dispatch = useDispatch()    

    const handleAddTask = () => {
        console.log(descriptionRef.current.value)
        dispatch(addTask(descriptionRef.current.value))
    }

    return(
        <div className="d-flex align-items-center border p-3 rounded mb-2" style={{width:'100%'}}>
            <div className="me-auto" id="taskTitle">
                <input 
                    type="text" 
                    ref={descriptionRef} 
                    className="form-control form-control-sm me-1" 
                    placeholder="Edit task..." 
                    style={{ minWidth: '800px' }}
                />
            </div>
            <div className="d-flex align-items-center">
                <button className="btn btn-primary btn-sm me-2" id="doneButton" onClick={handleAddTask}>Add</button>
            </div>
        </div>
    )
}

export default AddTask