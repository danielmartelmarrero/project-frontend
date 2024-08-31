
import { Link } from 'react-router-dom'
import SpecialBtn from '../components/SpecialBtn'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ProductIcon from '../components/ProductIcon'
function Homepage() {

    const [summerProds, setSummerProds] = useState([])
    const [gamingProds, setGamingProds] = useState([])
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/categories?_embed=Products`)
          .then((response) => {
            const foundSummerProds = response.data.find((oneCategory) => {
              return oneCategory.name == 'Summer'
            })
            setSummerProds(foundSummerProds.Products)
            const foundGamingProds = response.data.find((oneCategory) => {
                return oneCategory.name == 'Gaming'
              })
            setGamingProds(foundGamingProds.Products)
          })
          .catch((err) => { console.log(err) })
      }, []) 

      

    const products = document.querySelectorAll('.product_inslide')
    console.log(products)
    let counter = 0
    function moveLeft() {
        console.log('left')
        counter--
        if(counter>=0){
            scroll()
        }
        else{
            counter=0
        }
    }
    function moveRight() {
        counter++
        console.log('right')
        scroll()
    }
    function scroll() {
        products.forEach((item)=> {
            console.log('scroll')
            console.log(counter*1250)
            item.style.transform = `translateX(-${counter * 1250}px)`
        })
    }

    return (

        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
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

            <h3 className='subtitle-homepage' style={{ fontWeight: '700' }}>Featured Categories</h3>
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

            <section id='outletSec'>
                <div id='outletDiv'>
                    <div id='outletDivInfo'>
                        <h2>Zona Outlet</h2>
                        <p>ENVIO GRATIS para los mejores descuentos y Oportunidades.</p>
                        <Link to='/Offers'><button>Ver más</button></Link>
                    </div>
                    <img src="https://canarias.mediamarkt.es/cdn/shop/files/zona_outlet_colorline_d34a94d2-7950-42c2-a676-22a030b6c1d4.png?v=1682331810" alt="" />
                </div>
            </section>

            <h3 style={{ margin: '5% 0 0 10%', fontWeight: '700' }}>Special Summer</h3>
            <div className='slider'>
                
                {summerProds.map(oneProd=>{
                    return(
                        <div className='product_inslide' style={{padding:0, border:'none'}}>
                        <ProductIcon className='product_inslide' key={oneProd.id} product={oneProd} category='Summer'/>
                        </div>
                    )
                })}

                <div className='arrow'>
                    <button className='leftbtn' onClick={moveLeft}>{'<'}</button>
                    <button className='rightbtn' onClick={moveRight}>{'>'}</button>
                </div>
            </div>

            <h3 style={{ margin: '5% 0 0 10%', fontWeight: '700' }}>Gaming</h3>
            <div className='slider'>
                {gamingProds.map(oneProd=>{
                    return(
                        <div className='product_inslide' style={{padding:0, border:'none'}}>
                        <ProductIcon  key={oneProd.id} product={oneProd} category='Gaming'/>
                        </div>
                    )
                })}

                <div className='arrow'>
                    <button className='leftbtn' onClick={moveLeft}>{'<'}</button>
                    <button className='rightbtn' onClick={moveRight}>{'>'}</button>
                </div>
            </div>
            

            <section id='outletSec'>
                <div id='outletDiv'>
                    <div id='outletDivInfo'>
                        <h2>10€ de bienvenida</h2>
                        <p>Suscribete a nuestra newsletter y llévate 10€ de Regalo. Te entrarás antes que nadie de nuestras ofertas y promociones, apúntate y estarás al día de todo.</p>
                        <Link to='https://canarias.mediamarkt.es/pages/newsletter'><button>Ver más</button></Link>
                    </div>
                    <img src="https://canarias.mediamarkt.es/cdn/shop/files/news_colorline_260e7727-dce4-4da2-851d-507054ea16c9.png?v=1695313038" alt="" />
                </div>
            </section>

            <section id='featuredServices'>
                <h3 style={{ color: 'white' }}>Nuestros servicios destacados</h3>
                <div style={{ display: 'flex', width: '70%', margin: '0% auto' }}>
                    <Link to='https://canarias.mediamarkt.es/pages/financiacion'><SpecialBtn title='Mediamarkt Club Card' text='Solicita ya tu tarjeta y financia tu pedido al instante. Hasta 3.000 para hacer realidad tus sueños'></SpecialBtn></Link>
                    <Link to='https://www.digimobil.es/mediamarkt?utm_source=home&utm_medium=banner&utm_campaign=mediamarkt&utm_content=seccion_servicios'><SpecialBtn title='Personaliza tu tarifa' text='Encuentra aquí tus tarifas de red, móvil y entretenimiento para que no pagues de más'></SpecialBtn></Link>
                    <Link to='https://canarias.mediamarkt.es/pages/instalaciones'><SpecialBtn title='Servicio Instalación' text='Preocúpate de disfrutar y deja que nuestros especialistas instalen tu producto'></SpecialBtn></Link>
                </div>
            </section>

            <section id='companyConsulting'>
                <Link to='https://www.mediamarkt.es/es/specials/empresas'><SpecialBtn title='¿Necesitas asesoramiento para tu empresa?' text='Ponemos a tu servicio a los mejores especialistas en producto para tu empresa. ¿Quieres saber más?'></SpecialBtn></Link>
                <Link to='https://www.mediamarkt.es/es/specials/empresas'><SpecialBtn title='¿Tienes alguna duda?' text='Estaremos encantados de atenderte, consulta nuestras preguntas frecuentes o escribenos a travéss de la página de contacto'></SpecialBtn></Link>
            </section>
        </div>

    )
}

export default Homepage