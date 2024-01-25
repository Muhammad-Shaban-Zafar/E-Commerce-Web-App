import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


export default function Navebar() {

  const isAuthenticated = false

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseOut = () => {
    setIsDropdownOpen(false);
  };



  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow${scrolled ? ' fixed-top' : ''}`}>
        <div class="container">
          <Link to="/" class="navbar-brand fs-3 fw-bold py-2"><span className='text-dark border-start ps-4'>shop</span><span className='text-primary border-end pe-4'>cart</span></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold ms-5">

              <li class="nav-item mx-2">
                <Link to="/" class="nav-link"> Home</Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/about" class="nav-link">About</Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/contact" class="nav-link">Contact</Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/product" class="nav-link">Products</Link>
              </li>

            </ul>

            <div class="d-flex">

              {!isAuthenticated ? (
                <>
                  <div className='me-5'>
                    <Link to="login" className='btn btn-primary fw-bold mx-1 rounded-1'>Login <FontAwesomeIcon icon={faRightToBracket} /></Link>
                    <Link to="register" className='btn btn-primary fw-bold mx-1 rounded-1'>Register <FontAwesomeIcon icon={faUserPlus} /> </Link>
                  </div>
                </>
              ) : (
                <>
                  <div
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    className='me-5'
                  >
                    <Link to="/your-path" className="fs-3">
                      <FontAwesomeIcon icon={faUser} />
                    </Link>

                    {isDropdownOpen && (
                      <div class="dropdown">
                        {/* <button onclick="myFunction()" class="dropbtn">Dropdown</button> */}
                        <div id="myDropdown" class="dropdown-content">
                          <Link to="/profile" className="text-primary">
                            <FontAwesomeIcon icon={faUser} /> Account
                          </Link>
                          <Link to="/sitting" className="text-primary">
                            <FontAwesomeIcon icon={faGear} /> Setting
                          </Link>
                          <Link to="/logout" className="text-primary">
                            <FontAwesomeIcon icon={faRightToBracket} /> Logout
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              <Link to="cart">
                <FontAwesomeIcon icon={faCartShopping} className='basket fs-1 text-dark px-3 border-start border-end' />
              </Link>

            </div>

          </div>
        </div>
      </nav>
    </>
  )
}
