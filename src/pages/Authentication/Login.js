import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    return (
        <>
            <div className="container">

                <div className="row py-4 mt-5 mx-auto">
                    <div className="col-10 mx-auto">

                        <div className="row">

                            <div className="col-7">
                                <img src="https://media.istockphoto.com/id/1761105272/photo/close-up-of-a-woman-using-a-smartphone-to-work-on-various-application-including-mobile.jpg?s=612x612&w=0&k=20&c=o2r0pL4Tf4HSo5upTUBFM-V9kWlHU-T_V6Fv9rJoJk0=" className='img-fluid w-100 h-100' />
                            </div>

                            <div className="col-5">

                                <div className="row">
                                    <h2 className=''><span className='text-dark fw-bold'>Welcome</span> <span className='text-primary fw-bold'>Back</span></h2>
                                    <p className='text-secondary mb-n3'>Enter your personal details and start learning</p>
                                </div>

                                <form action="" className='my-3'>

                                    <div class="form-floating mb-3">
                                        <input
                                            type="email"
                                            class="form-control rounded-1"
                                            id="floatingInput"
                                            name="firstName"
                                            placeholder="FirstName"
                                        // onChange={onChangeHandler}
                                        />
                                        <label for="floatingInput">Email Address</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input
                                            type="password"
                                            class="form-control rounded-1"
                                            id="floatingInput"
                                            name="firstName"
                                            placeholder="FirstName"
                                        // onChange={onChangeHandler}
                                        />
                                        <label for="floatingInput">Enter Password</label>
                                    </div>
                                    <div className="row">
                                        <p>If you have forgotten your password, go through the 'Forgot Password' to it ?<span><Link className='ms-1 text-decoration-none'>Forget Password</Link></span></p>
                                    </div>

                                    <button className='btn btn-dark w-100 rounded-1 fw-bold'>Login <FontAwesomeIcon icon={faRightToBracket} /></button>
                                </form>

                                <div className="row">
                                    <p className='text-secondary'>If you haven't created an account,so please create one for registration to click it ? <span><Link to="/register" className='text-primary text-decoration-none'>Register</Link></span></p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}
