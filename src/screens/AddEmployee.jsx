import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/formstyle.css'

export default function AddEmployee() {
    return (
        <div>
            <Navbar />
            <div className='form-area'>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="name" class="form-control" id="exampleInputEmail1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Age</label>
                        <input type="Number" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Department</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="status">Employee Status : </label>
                        <select name="status" class="form-select" aria-label="Default select example">
                            <option value="" selected>-</option>
                            <option value="Remote Location">Remote Location</option>
                            <option value="Contract Employee">Contract Employee</option>
                            <option value="Full-Time">Full-Time</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
