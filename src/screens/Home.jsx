import React from 'react'
import Navbar from '../components/Navbar'
import Table from '../components/Table'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='container d-flex justify-content-center'>
                <Table />
                <button type="button" class="btn btn-warning add-employee-btn">Add Employee</button>
            </div>
        </div>
    )
}
