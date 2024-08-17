import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Homepage() {

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cms-images.mmst.eu/osyynfyvlyjc/362Yak1imsYCZAurBSClMA/5bae6ba5342a77d3f61d008c36e7b1bf/Ofertas_Flash_Mayo_Full_Image_1344x354.png?q=92&fm=jpg&w=1472&h=354&fit=fill" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cms-images.mmst.eu/osyynfyvlyjc/2dZG6uWz31ibgY52qwuthF/77f369828c8dd3310c7678a24576b60a/Ofertas-Verano_FULL-IMAGE---DESKTOP_1344x354.jpg?q=92&w=1472&h=354&fit=fill" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cms-images.mmst.eu/osyynfyvlyjc/HNA2AG7uKmFLpL4ldlViA/6e3b3288a6e3917367a0a998739aa11f/Desktop_Full_Image_1344x354.png?q=92&fm=jpg&w=1472&h=354&fit=fill" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h3 className='subtitle-homepage'>Featured Categories</h3>
            <div id='featuredCategories' >
                
                <div className='categoryDiv'>
                    <Link to='/Offers'>
                        <img src="https://canarias.mediamarkt.es/cdn/shop/files/image_4_fb124120-52bd-4acc-bfcc-181aded14475_800x572.png?v=1701098660" alt="" />
                        <h6>Discover all our offers</h6>
                    </Link>
                </div>
                <div className='categoryDiv'>
                    <Link to='/Televisions'>
                    <img src="https://canarias.mediamarkt.es/cdn/shop/files/1_800x572.webp?v=1713867988" alt="" />
                        <h6>Televisions</h6>
                    </Link>
                </div>
                <div className='categoryDiv'>
                    <Link to='/Smartphones'>
                    <img src="https://canarias.mediamarkt.es/cdn/shop/files/Distri_S24_Ultra__1_4047cd96-ac1b-4d14-a2d6-a6c0c8662d4f_800x572.webp?v=1713867962" alt="" />
                        <h6>Smartphones</h6>
                    </Link>
                </div>
                <div className='categoryDiv'>
                    <Link to='/AppleZone'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" alt="" />
                    <h6>Apple Zone</h6>
                    </Link>
                </div>
                <div className='categoryDiv'>
                    <Link to='/Laptops'>
                    <img src="https://canarias.mediamarkt.es/cdn/shop/files/portatil3_fcd66e93-87ff-4692-81e6-216ae763e60b_800x572.webp?v=1713867946" alt="" />
                    <h6>Laptops</h6>
                    </Link>
                </div>
                <div className='categoryDiv'>
                    <Link to='/HouseholdAppliances'>
                    <img src="https://canarias.mediamarkt.es/cdn/shop/files/electro_690f721c-30b9-4683-a21f-36c5172317d2_800x572.webp?v=1713867930" alt="" />
                    <h6>Household Appliances</h6>
                    </Link>
                </div>
            </div>
            <h3 className='subtitle-homepage'>Summer Offers - Until 08/14 at 9am</h3>
        </div>
    )
}

export default Homepage