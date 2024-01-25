import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



import React from 'react'

export default function About() {
  return (
    <>
      <div className='pt-5'>
        <div className="container mt-5">
          <div className="row">

            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <h1 className='text-dark fw-light'>WELL COME <span className='text-primary'>TO</span>
                    <br />
                    <div className='fw-bold'>
                      shop<span className='text-primary'>cart</span>
                    </div>
                  </h1>
                </div>
              </div>

              <div className="row my-4">
                <div className="col-12">
                  <p className='text-secondary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nostrum doloremque. Soluta mollitia illum fugit illo accusantium possimus, tenetur pariatur nam vero et at rerum provident officiis voluptas doloremque odit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nostrum doloremque. Soluta mollitia illum fugit illo accusantium possimus, tenetur pariatur nam vero et at rerum provident officiis voluptas doloremque odit!
                  </p>
                </div>
                <div className="col-12">
                  <button className='btn btn-dark fw-bold rounded-1'>Get Started <FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button>
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-12">
                  <Link>
                    <FontAwesomeIcon icon={faFacebook} className='fs-3 text-primary px-2' />
                  </Link>
                  <Link>
                    <FontAwesomeIcon icon={faYoutube} className='fs-3 text-primary px-2' />
                  </Link>
                  <Link>
                    <FontAwesomeIcon icon={faTwitter} className='fs-3 text-primary px-2' />
                  </Link>
                  <Link>
                    <FontAwesomeIcon icon={faInstagram} className='fs-3 text-primary px-2' />
                  </Link>
                </div>
              </div>

            </div>

            <div className="col-6">
              <img src="https://media.istockphoto.com/id/1645939960/photo/young-couple-in-consumer-electronics-store-looking-at-latest-digital-devices-television.jpg?s=612x612&w=0&k=20&c=yUKEA_rSmTLOXMGXJYyN_U6ON9KFXVLt_-BhwtGpuOw=" alt="" className='img-fluid' />
            </div>

          </div>


        </div>

      </div>
    </>
  )
}
