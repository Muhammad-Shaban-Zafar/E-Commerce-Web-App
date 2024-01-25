import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
// import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
    return (
        <>
            <div className="container">

                <div className="row py-4 mt-4 mx-auto">
                    <div className="col-10 mx-auto">

                        <div className="row">

                            <div className="col-7">
                                <img src="https://media.istockphoto.com/id/1468757785/photo/human-resources-and-management-concept-employee-must-complete-the-online-survey-form-marked.webp?b=1&s=170667a&w=0&k=20&c=b9QV98XaaziiO9Poaxhp5v13CQvdoEF15kTL8ylC6Wo=" className='img-fluid w-100 h-100' />
                            </div>


                            <div className="col-5">

                                <div className="row">
                                    <h2 className=''><span className='text-dark fw-bold'>Create</span> <span className='text-primary fw-bold'>Account</span></h2>
                                    <p className='text-secondary mb-n3'>Enter your personal details and start learning</p>
                                </div>

                                <form action="" className='my-3'>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control rounded-1"
                                            id="floatingInput"
                                            name="firstName"
                                            placeholder="FirstName"
                                        // onChange={onChangeHandler}
                                        />
                                        <label for="floatingInput">First Name</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control rounded-1"
                                            id="floatingInput"
                                            name="firstName"
                                            placeholder="FirstName"
                                        // onChange={onChangeHandler}
                                        />
                                        <label for="floatingInput">Last Name</label>
                                    </div>

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
                                        <label for="floatingInput">Create Password</label>
                                    </div>

                                    <button className='btn btn-dark w-100 rounded-1 fw-bold'>Create Account <FontAwesomeIcon icon={faUserPlus} /></button>
                                </form>

                                <div className="row">
                                    <p className='text-secondary'>If you already have an account that you created and you want to log in directly ? <span><Link to="/login" className='text-primary text-decoration-none'>Login</Link></span></p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}
