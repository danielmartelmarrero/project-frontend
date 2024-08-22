import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [search, setSearch] = useState("")
    const [zipCode, setzipCode] = useState("Enter your zip code")

    function handleSubmit(e) {
        e.preventdefault()
    }
    return (
        <div id='Navbar'>
            <Link to='/'><img src="https://cms-images.mmst.eu/osyynfyvlyjc/44h8niXHULqXsrJQIX29AZ/56e82d73704471511e9484f373b39f39/MM_logo_white.svg?q=80" alt="" /></Link>
            <button id='allCategoriesBtn' className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg> All categories
            </button>

            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <img src="https://cms-images.mmst.eu/osyynfyvlyjc/3tafBqIMEjhHw96QzsniyZ/98471da343414e541636c50a997eaba3/MM_logo_red.svg?q=80" alt="" />
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div id='categoriesList'>

                        <hr />
                        <p>All categories</p>

                        <button>Campaigns and offers</button>
                        <button>Computing</button>
                        <button>Gaming</button>
                        <button>Computer Accesories</button>
                        <button>Telephony</button>
                        <button>Smart Watches</button>
                        <button>Television</button>
                        <button>Audio and HiFi</button>
                        <button>Consoles and Video games</button>
                        <button>Household appliances</button>
                        <button>Small appliances</button>
                        <button>Beauty and health</button>
                        <button>Air conditioning and heating</button>
                        <button>Smart Home</button>
                        <button>Urban mobility</button>
                        <button>Photograph</button>
                        <button>Other categories</button>
                        <button>Companies</button>
                        <button>Outlet and refurbished</button>
                        <hr />
                        <button>Rate and win</button>
                        <button>Personalized gifts</button>
                        <button>Facility</button>
                        <button>Own brands</button>
                        <button>Mobility insurance</button>
                        <button>Apple services</button>
                        <button>Sell your devices</button>
                        <button>Sustainabilty</button>
                    </div>
                </div>
            </div>
            <form id='searchBar' onSubmit={handleSubmit}>
                <img src="./assets/magnifier.jpg" alt="" />
                <input value={search} type="text" onChange={(e) => { setSearch(e.target.value) }} />
            </form>
            <button id='myShopBtn' className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">My Shop</button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Select your store</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Enter your zip code or city to see the stores closest to you. This will allow you to check the availability of the product.</p>
                    <div id='shopsList'>
                        <form onSubmit={handleSubmit}>
                            <input required value={zipCode} type="text" onChange={(e) => { setzipCode(e.target.value) }} />
                            <button>Search</button>
                        </form>

                        <button>Select Shop</button>
                    </div>
                </div>
            </div>
            <Link to='/myAccount'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg></Link>
            <Link to='/cart'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg></Link>
        </div>
    )
}

export default Navbar