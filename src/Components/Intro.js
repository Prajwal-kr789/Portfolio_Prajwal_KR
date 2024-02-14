import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import devImage from '../Images/Dev_Image (2).png'


const Intro = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
    })

    return(
        <div>
        <div className="flex flex-row lg:justify-around sm:flex-col-reverse lg:flex-row lg:ml-20 items-center mt-28 ">
            <div className="max-w-2xl space-y-7">
                <p className="text-white text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl" data-aos="fade-in" data-aos-delay="500">Hi I'am Prajwal KR.</p>
            <p class="mb-4 text-2xl font-extrabold leading-none  text-[#1ba1e5] sm:text-xl  md:text-2xl lg:text-3xl "  data-aos="fade-right">Frontend Developer</p>
            <p class="mb-4 text-xl font-extrabold leading-none tracking-tight text-white sm:text-md md:text-lg lg:text-xl  flex "  data-aos="fade-up">Passionate Frontend Web developer, I am deeply committed to crafting engaging and user-friendly Digital experiences. I thrive on turning creative concepts into Dynamic and Responsive websites that captivate and delight users.</p>
            <a href="https://drive.google.com/file/d/16vgR9vai9TgWzexb5paNtT1A4Lx2tLGE/view?usp=sharing" target="blank"  download><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium mt-3 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#08aae6] dark:hover:bg-[#08abe6c5] focus:outline-none dark:focus:ring-blue-800" data-aos="zoom-in" data-aos-delay="500">Download CV</button></a>
            </div>
            {/* https://drive.usercontent.google.com/u/0/uc?id=16vgR9vai9TgWzexb5paNtT1A4Lx2tLGE&export=download download link img:https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg*/}
            <div >
                <img src={devImage} className="rounded-full  w-9/12 sm:w-7/12 sm:mx-auto md:w-4/12 lg:w-10/12" alt="" data-aos="fade-left" data-aos-delay="300" />
            </div>


        </div>
        {/* <div className='flex   relative -bottom-30 left-0 p-4'>
            <a href="https://www.linkedin.com/in/prajwal-kr-49732727b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin text-[#185def] border-2 border-[#185def] rounded-full p-2 w-9 h-9"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="mailto:prajwal07kr@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail text-[#185def] border-2 border-[#185def] ml-2 rounded-full p-2 w-9 h-9"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>
        </div> */}
        </div>
    )
}

export default Intro;