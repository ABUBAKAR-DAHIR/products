import { BaggageClaim, ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function Products() {
    let [products, setProducts] = useState([])
    let [resturants, setRestaurants] = useState([])
    useEffect(()=>{
        // async function getProducts(){
        //     // let productPromise = await fetch("https://dummyjson.com/products")
        //     let productPromise = await fetch("http://localhost:3000/fetchProducts")
        //     let products = await productPromise.json()
        //     // let prods = products.products
        //     console.log(products);
            
        //     setProducts(products)
        // }

        async function getSwiggyProducts() {
            // let swiggyProductPromise = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.29273179228458&lng=73.36610261427192&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            let swiggyProductPromise = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.29273179228458&lng=73.36610261427192&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING/data.cards[2].card.card.gridElements.infoWithStyle.restaurants")
            let swiggyProducts = await swiggyProductPromise.json()
            swiggyProducts = swiggyProducts.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
            // console.log("heyyy" + swiggyProducts.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            console.log("heyyy" + swiggyProducts);
            setProducts(swiggyProducts)
            
        }

        // using db
        async function getSwiggyRestaurants() {
            // let swiggyProductPromise = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.29273179228458&lng=73.36610261427192&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            let swiggyRestaurantPromise = await fetch("http://localhost:3000/fetchRestaurants")
            let swiggyRestaurants = await swiggyRestaurantPromise.json()
            console.log("heyyy" + swiggyRestaurants);
            setRestaurants(swiggyRestaurants)
            
        }

        getSwiggyProducts()
        getSwiggyRestaurants()
        // getProducts()

    }, [])
    let restaurant;
  return (
    <div className=' flex flex-wrap container mx-auto gap-2 py-4 items-center justify-center'>
        {/* {
            products.map((product) => (
                <div key={product.id} className='border-2 border-black rounded-xl p-4 cursor-pointer group'>
                    <img src={product.image} className='group-hover:scale-110 transition-all duration-500'/>
                    <p className='font-bold'>{product.title}</p>
                    <div className='flex justify-between'>
                        <p>Rating: {product.rating}</p>
                        <p className='pr-10 font-semibold'>${product.price}</p>
                    </div>
                    <div className='flex justify-between'>
                        <button className='shopify-button bg-green-400  hover:bg-green-400/75'><span className='text-white'><ShoppingCart /></span> <span className='ml-2 mr-2'>Buy now</span></button>
                        <button className='shopify-button bg-amber-500  hover:bg-amber-500/75'><span className='text-white'><BaggageClaim /></span> <span className='ml-2 mr-2'>Add to Cart</span></button>
                    </div>
                </div>
            ))
        } */}

        {/* for swiggy */}
                {
            products.map((product) => (
                <div key={product.info.id} className=' p-2 group w-[350px] hover:scale-90 transition-transform duration-500 ease-in-out'>
                    <div className='bg-red-700 rounded-3xl overflow-clip'>
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${product.info.cloudinaryImageId}`}  alt={product.info.name} className='w-full h-60 object-cover hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer'/>
                    </div>
                    {/* {
                        restaurant = {
                            image: product.info.cloudinaryImageId,
                            name: product.info.name,
                            rating: product.info.avgRating,
                            time: product.info.sla.slaString,
                            cuisines: product.info.cuisines,
                            location: product.info.areaName
                        }
                    } */}
                    
                    {console.log(
                            "image:" + product.info.cloudinaryImageId + "\n",
                            "name:"+  product.info.name + "\n",
                            "rating:" + product.info.avgRating + "\n",
                            "time:" + product.info.sla.slaString + "\n",
                            "cuisines:" + product.info.cuisines + "\n",
                            "location:" + product.info.areaName + "\n\n"
                    )}
                    <div className='p-4'>
                        <p className='font-extrabold'>{product.info.name}</p>
                        <div className='flex gap-1 items-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                            <p className='font-semibold'>{product.info.avgRating} • </p>
                            <p className='pr-10 font-semibold'>{product.info.sla.slaString}</p>
                        </div>
                        {
                            product.info.cuisines.map((cuisine)=>(
                                <span className='text-gray'>{cuisine}{product.info.cuisines[product.info.cuisines.length-1] == cuisine ? '': ','} </span>
                                
                            ))
                        }
                        <p className='text-gray'>{product.info.areaName}</p>

                    </div>
                </div>
            ))
        }

        {/* for swiggy mongoDB */}
        {
            resturants.map((restaurant) => (
                <div key={restaurant.name} className=' p-2 group w-[350px] hover:scale-90 transition-transform duration-400 ease-in-out cursor-pointer'>
                    <div className='bg-red-700 rounded-3xl overflow-clip'>
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.image}`}  alt={restaurant.name} className='w-full h-60 object-cover hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer '/>
                    </div>
                    <div className='p-4'>
                        <p className='font-extrabold'>{restaurant.name}</p>
                        <div className='flex gap-1 items-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                            <p className='font-semibold'>{restaurant.rating} • </p>
                            <p className='pr-10 font-semibold'>{restaurant.time}</p>
                        </div>
                        {
                            restaurant.cuisines.map((cuisine)=>(
                                <span className='text-gray'>{cuisine}{restaurant.cuisines[restaurant.cuisines.length-1] == cuisine ? '': ','} </span>
                                
                            ))
                        }
                        <p className='text-gray'>{restaurant.location}</p>

                    </div>
                </div>
            ))
        }
        {/* <img src="" alt="" /> */}
    </div>
  )
}


// display data from api
// create db
// display data from db
// add a filter for restaurants greater than or equal to 4