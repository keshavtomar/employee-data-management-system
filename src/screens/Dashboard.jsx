import React from 'react'
import { Pie } from 'react-chartjs-2'
import Navbar from '../components/Navbar'
import '../styles/dashstyle.css'
import { data } from '../components/data'



export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className='graphBox'>
                <div className='box'>
                    <Pie data={data} />
                </div>
                <div className='box'></div>
            </div>
        </div>
    )
}
