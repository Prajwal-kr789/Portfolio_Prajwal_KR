import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Projects = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return(
        <div className=" flex flex-col justify-around items-center ">
                    <h2 className=" text-white text-3xl sm:3xl md:text-4xl lg-:text-5xl font-bold" data-aos="fade-in" data-aos-delay="200">Major <span className='text-[#08aae6]'>Projects</span></h2>
        {/* 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20"  data-aos="fade-in" data-aos-delay="500">

        
            <div class="max-w-sm  border-2 border-[#08aae6] rounded-lg  bg-gray-800 dark:border-[#08aae6] p-1 shadow-sm shadow-[#08aae6] ">
                <a href="/">
                    <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">E-commerce Website</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-400">Ecommerce websites combine sleek frontend design with functionality, offering users visually appealing interfaces for seamless online shopping experiences</p>
                    <a href="https://prajwal-kr789.github.io/E-Commerce/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Visit
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* 2 */}

            <div class="max-w-sm  border-2 border-[#08aae6] rounded-lg  bg-gray-800 dark:border-[#08aae6] p-1 shadow-sm shadow-[#08aae6] ">
                <a href="/">
                    <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">CityShine</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-400">A Cleanliness Based project where the complaning made easier.Streamlined platform for effortless and efficient cleanliness issue reporting</p>
                    <a href="https://prajwal-kr789.github.io/CityShine-react/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Visit
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>


            {/* 3 */}

            <div class="max-w-sm  border-2 border-[#08aae6] rounded-lg  bg-gray-800 dark:border-[#08aae6] p-1 shadow-sm shadow-[#08aae6] ">
                <a href="/">
                    <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Rock Paper Scissor Game</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-400">Play a simple individual vs. computer game, enjoy a quick interactive challenge.</p>
                    <a href="https://prajwal-krp07.github.io/rock_paper/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Visit
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects;