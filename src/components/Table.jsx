import React from 'react'
import Eye from '@mui/icons-material/RemoveRedEye';
import '../styles/tablestyle.css'
import EditIcon from '@mui/icons-material/Edit';


export default function Table() {
    return (
        <div>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>View</th>
                        <th>
                            Update
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>124</td>
                        <td>Dom Kater dex</td>
                        <td>6000</td>
                        <td>
                            <button type="button" class="btn btn-info">
                                <Eye></Eye>
                            </button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-info">
                                <EditIcon></EditIcon>
                            </button>
                        </td>
                    </tr>
                    <tr class="active-row">
                        <td>123</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>
                            <button type="button" class="btn btn-info text-success">
                                <Eye></Eye>
                            </button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-info text-success">
                                <EditIcon></EditIcon>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
