import { Avatar } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'


export default function Navbar() {

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    let navigate = useNavigate()

    const handlelogout = () => {
        localStorage.removeItem("authToken")
        localStorage.removeItem("userName")
        localStorage.removeItem("userEmail")
        navigate("/");
        toast('Logged Out', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div>
            <ToastContainer />
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Employee Management</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarScroll">
                        {!localStorage.getItem("authToken") ?
                            <ul className="navbar-nav me-4 my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                                <li className="nav-item me-2">
                                    <Link className="nav-link active" aria-current="page" to="/login">
                                        <button type="button" className="btn btn-outline-info">Login</button>
                                    </Link>
                                </li>
                                <li className="nav-item me-2 ">
                                    <Link className="nav-link active" to="/signup">
                                        <button type="button" className="btn btn-outline-info">SignUp</button>
                                    </Link>
                                </li>
                            </ul> :
                            <ul className="navbar-nav me-4 my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                                <li className="nav-item dropstart">
                                    <Link className="nav-link " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <Avatar {...stringAvatar(localStorage.getItem('userName'))} />
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/">Profile</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li className='text-center'>
                                            <button type="button" class="btn btn-outline-danger " onClick={handlelogout}>Log Out</button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        }


                    </div>
                </div>
            </nav>
        </div>
    )
}
