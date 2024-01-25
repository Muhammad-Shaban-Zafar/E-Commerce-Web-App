import React, {useState} from 'react'
import Button from '../../components/Card/Card'

export default function Product() {

    const [topProduct, setTopProduct] = useState([
        {
            productImg: "https://afzalelectronics.pk/wp-content/uploads/2022/12/02.png",
            productName: "MOBILE",
            productModal: "VIVO Y22",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            productPrice: 5673,
        },
        {
            productImg: "https://afzalelectronics.pk/wp-content/uploads/2023/01/honda-125CC.png",
            productName: "BIKE",
            productModal: "HONDA CD-70",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            productPrice: 5632,
        },
        {
            productImg: "https://afzalelectronics.pk/wp-content/uploads/2023/01/01-18.png",
            productName: "OWEN",
            productModal: "MICROWAVE OWEN",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            productPrice: 6532,
        },
        {
            productImg: "https://afzalelectronics.pk/wp-content/uploads/2023/01/01-9.png",
            productName: "WASING MACHINE",
            productModal: "DAWLENCE MACHINE",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            productPrice: 8766,
        },

        {
            productImg: "https://afzalelectronics.pk/wp-content/uploads/2023/01/01-15.png",
            productName: "REFRIGRATER",
            productModal: "HAIER FRIDGE",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            productPrice: 5673,
        }, {
            productImg: "https://afzalelectronics.pk/wp-content/uploads/2022/10/Dawlance_enercon.png",
            productName: "AIR CONDITIONER",
            productModal: "INVERTOR AC",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            productPrice: 5673,
        },
        {
            productImg: "https://afzalelectronics.pk/wp-content/uploads/2023/01/01-3.png",
            productName: "LED",
            productModal: "ECO STAR LED",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            productPrice: 5483,
        },
        {
            productImg: "https://afzalelectronics.pk/wp-content/uploads/2022/12/01.png",
            productName: "MOBILE",
            productModal: "VIVO Y22",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            productPrice: 5673,
        }

    ]);


    return (
        <>
            <div className="container my-5">

                <div className="row">
                    <div className="col">
                        <h5 className='text-dark fw-bold'>NEW ARRIVAL</h5>
                    </div>
                </div>

                <div className="row border mt-2 p-4">
                {topProduct.map((item, index) => (
                        <div key={index} className="shoppingCard col-3 py-3">
                            <img src={item.productImg} className='img-fluid w-100' alt={`Product ${index}`} />
                            <div className='text-center mt-3'>
                                <h6 className='fw-bold text-dark'>{item.productName}</h6>
                                <h6 className='text-primary fw-light'>{item.productModal}</h6>
                                <h6 className='text-primary fw-light'> <b>$</b> {item.productPrice}</h6>
                                <Button bgColor="dark" FW="bold" BS="sm" SHAP="1" name="Read More" MT="2" productName={item.productName} productModal={item.productModal} productDescription={item.productDescription} productPrice={item.productPrice} productImg={item.productImg} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
