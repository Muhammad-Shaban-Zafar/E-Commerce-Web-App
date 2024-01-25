import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Contact() {
  return (
    <>
      <div className="container">

        <div className="row py-4 mt-5 mx-auto">
          <div className="col-10 mx-auto">

            <div className="row">

              <div className="col-7">
                <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D=" className='img-fluid w-100 h-100' />
              </div>

              <div className="col-5">

                <div className="row">
                  <h2 className=''><span className='text-dark fw-bold'>Contact</span> <span className='text-primary fw-bold'>Us</span></h2>
                  <p className='text-secondary mb-n3'>Enter your personal details and start the learning</p>
                </div>

                <form action="" className='my-3'>

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control rounded-1"
                      id="floatingInput"
                      name="userName"
                      placeholder="UserName"
                    // onChange={onChangeHandler}
                    />
                    <label for="floatingInput">User Name</label>
                  </div>


                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control rounded-1"
                      id="floatingInput"
                      name="emailAddress"
                      placeholder="EmailAddress"
                    // onChange={onChangeHandler}
                    />
                    <label for="floatingInput">Email Address</label>
                  </div>

                  <div class="form-floating mb-3">
                    <textarea
                      type="text"
                      class="form-control rounded-1"
                      id="floatingInput"
                      name="message"
                      rows="10"  // Increase this value to make the textarea taller
                      placeholder="Message"
                    ></textarea>
                    <label for="floatingInput">Message</label>
                  </div>

                  <button className='btn btn-dark w-100 rounded-1 fw-bold'>Submit <FontAwesomeIcon icon={faArrowRight} /></button>
                </form>

                <div className="row">
                  <p className='text-secondary'>If you haven't created an account,so please create one for registration to click it ? <span><Link to="/register" className='text-primary text-decoration-none'>Register</Link></span></p>
                </div>

              </div>

            </div>

          </div>
        </div >


      </div >
    </>
  )
}
