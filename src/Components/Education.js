import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Education = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
    })

    return(
        <div className="h-screen mt-20">
            <div className="flex justify-center items-center flex-col">

                    <h2 className="text-white sm:3xl md:text-4xl lg-5xl font-bold" data-aos="fade-in">Education</h2>

<ol class="relative border-s  ml-10 border-gray-200 dark:border-gray-700 mt-20" data-aos="fade-up" data-aos-delay="500">              

    <li class="mb-10 ms-6 lg:w-9/12 border-2 border-[#08aae6] rounded-lg p-4"  >            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white">GM Institute of Technology</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2025</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Currently Pursuing 3rd year BE in Information Science</p>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">CGPA : 8.6/10</p>
         
    </li>

    <li class="mb-10 ms-6 lg:w-9/12 border-2 border-[#08aae6] rounded-lg p-4" >
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-white">Sri Siddaganga Pu Science College.</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019 - 2021</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">PCMB (Percentage : 94%)</p>
    </li>

    <li class="ms-6 lg:w-9/12 border-2 border-[#08aae6] rounded-lg p-4" >
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-white">GM H High School </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 - 2019</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">SSLC (Percentage : 92%)</p>
    </li>

</ol>


            </div>
        </div>
    )
}

export default Education;