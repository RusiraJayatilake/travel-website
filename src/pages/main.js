import React from 'react'
import Slideshow from '../components/slideshow'
import '../assets/styles/main.css';
import img1 from '../assets/img/main-img.png'


const main = () => {
  // const images = [
  //   'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1442570468985-f63ed5de9086?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
  // ]

  const images = [img1];

  return (
    <div className="relative">
      <Slideshow images={images} interval={5000} />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-7xl lg:text-7xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Explore</span> The World.</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>

      <div className='discover-section'>
        {/* <h5 class="discover-heading text-xl font-bold dark:text-dark">Place to Discover</h5> */}
        
        {/* Cards 1 */}
        <div className='cards'>
          <div class="place-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <img class="card-img rounded-t-lg" src="https://images.unsplash.com/photo-1701781741800-feacbac1d7a0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div class="place-data">
              <a href="#">
                <h5 class=" text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Place Name</h5>
              </a>
              <p class="font-light text-sm text-gray-700 dark:text-gray-400">Price</p>
            </div>
          </div>
        </div>

      </div>
    </div>    
  )
}

export default main
