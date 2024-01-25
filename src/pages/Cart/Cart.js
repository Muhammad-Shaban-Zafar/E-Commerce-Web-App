import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"


export default function Cart() {
    // State to store the cart items
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []); // Run the effect only once on component mount



    // Delete item from cart by index
    function deleteItemInCart(index) {
        const updatedCartItems = cartItems.filter((item, i) => i !== index);
        setCartItems(updatedCartItems);

        // Save the updated cart items back to local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }


    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <>
            <div className="container mt-5">
                <table className="table table-striped table-hover">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Profile</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Actual Price</th>
                            <th scope="col">Total Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td> <img src={item.img} alt="" className='imgInTable img-fluid rounded-circle' /> </td> {/* Replace with actual profile data */}
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td> <b className='me-1'>$</b> {item.price}</td>
                                <td> <b className='me-1'>$</b> {item.price * item.quantity}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm fw-bold rounded-1' onClick={() => deleteItemInCart(index)}><FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

                {cartItems.length > 0 ? (
                    <div className='row mt-5 text-center'>
                        <div className="col">
                            <h3 className='text-primary'>Total Amount is :<span className= 'fw-light'> ${totalAmount.toFixed(2)}</span></h3>
                            <button className='btn btn-dark fw-bold rounded-1 w-25 mt-2'>Order Now</button>
                        </div>
                    </div>
                ) : (
                    <div className="row mt-5 text-center">
                        <div className="col">
                            <h3>No items in the cart.</h3>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}
