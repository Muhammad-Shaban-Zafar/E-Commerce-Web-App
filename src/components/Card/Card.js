
// import components and other libraries
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Modal } from 'react-bootstrap'; // Import Bootstrap's Modal component
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// end 


const Card = (props) => {

    // useState
    const [showModal, setShowModal] = React.useState(false);
    const [number, setNumber] = useState(1)
    const [imgUrl, setImgUrl] = useState("")
    // end useState

    // openModalFuntion
    const openModal = () => {
        setShowModal(true);
        setImgUrl(props.productImg)
    }
    // end 

    // closeModalFuntion
    const closeModal = () => {
        setShowModal(false);
    }
    // end

    // addToQuentity
    function addNumber() {
        setNumber(number + 1)
    }
    // end 

    // subQuentity
    function subNumber() {
        if (number > 1) {
            setNumber(number - 1)
        }
    }
    // end

    // genraeRandomId
    function generateRandomId(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomId += characters.charAt(randomIndex);
        }

        return randomId;
    }
    // end 

    // Example: Generate a random ID of length 8
    const randomId = generateRandomId(8);
    console.log(randomId);
    // end 


    // addToCartFuntion
    function addToCart() {
        debugger

        // Assume you have some data related to the item you want to store

        // itemObject
        var item = {
            id: randomId,
            name: props.productName,
            price: props.productPrice,
            quantity: number,
            img: imgUrl,
        };
        // end

        // Get the existing cart items from local storage or initialize an empty array
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the item is already in the cart
        var existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {

            // If the item is already in the cart, update its quantity
            cartItems[existingItemIndex].quantity += item.quantity;

        } else {

            // If the item is not in the cart, add it to the cart
            cartItems.push(item);
        }

        // Save the updated cart items back to local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // You can also display a confirmation message or update the UI as needed
        alert('Item added to cart successfully!');

    }
    // end 

    return (
        <>
            {/* Button to open the modal */}
            <button className={`btn btn-${props.bgColor} btn-${props.BS} fw-${props.FW} rounded-${props.SHAP} mt-${props.MT}`} onClick={openModal}>
                {props.name} <FontAwesomeIcon className='ms-1' icon={faArrowRight} />
            </button>

            {/* Bootstrap Modal component */}
            <Modal show={showModal} onHide={closeModal} className='rounded-0' dialogClassName="custom-width-modal">

                {/* <Modal.Header closeButton>
                    <Modal.Title>{props.productName}</Modal.Title>
                </Modal.Header> */}

                <Modal.Body>

                    <div className="container p-4">
                        <div className="row">
                            <div className="col-6">
                                <img src={imgUrl} className='img-fluid' />
                                {/* {props.productImg} */}
                            </div>
                            <div className="col-6">

                                <div className=''>
                                    <h5 className='fw-bold'>{props.productName}</h5>
                                    <h3 className='fw-light'>{props.productModal}</h3>
                                </div>

                                <div className='pt-2'>
                                    <p className='text-primary fs-4'><b className='me-1'>$</b>{props.productPrice}</p>
                                </div>


                                <div className='pt-2'>
                                    <p className='fw-bold'>Description</p>
                                    <p className='text-secondary'>{props.productDescription}</p>
                                </div>

                                <div className='pt-2'>
                                    <p className='fw-bold'>Add Quantity</p>
                                    <button className='btn btn-light fw-bold me-3' onClick={subNumber}>-</button>
                                    <b>{number}</b>
                                    <button className='btn btn-light fw-bold ms-3' onClick={addNumber}>+</button>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-6">
                                <button className='btn btn-primary fw-bold rounded-1 w-100'>Buy Now <FontAwesomeIcon icon={faMoneyBill} /></button>
                            </div>
                            <div className="col-6">
                                <button className='btn btn-dark fw-bold rounded-1 w-100' onClick={addToCart}>Add To Cart <FontAwesomeIcon icon={faCartShopping} /></button>
                            </div>
                        </div>

                    </div>

                </Modal.Body>

                {/* <Modal.Footer>
                    <button className="btn btn-secondary" onClick={closeModal}>
                        Close
                    </button>
                </Modal.Footer> */}

            </Modal>
        </>
    );
}

export default Card;
