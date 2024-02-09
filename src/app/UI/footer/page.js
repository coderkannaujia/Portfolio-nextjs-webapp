
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer(){
  return(
    <>
        <section className="about  mt-24 bg-green-100  h-[350px] ">

       

         <div className="flex justify-center ">

          <div className="flex justify-between gap-52">

            <div>
          <h1  className="mt-8 mr-52 text-bold text-lg ">logoipsuml ✈️</h1>
          </div>

          <div> 
          <ul className="flex gap-6  mt-8">
            <li><a href="#" className="text-bold text-md">Home</a></li>
            <li><a href="#" className="text-bold text-md">Portfolio</a></li>
            <li><a href="#" className="text-bold text-md">About me</a></li>
            <li><a href="#" className="text-bold text-md">Contact</a></li>
            <li><a href="#" className="text-bold text-md">Testimonials</a></li>
            

          </ul>
          </div>

          <div className="flex items-center  gap-6 mt-8 mr-4">
        <a href="#"> <FaFacebook /></a> 
        <a href="#"><FaInstagramSquare /></a>  
        <a href="#"><FaTwitterSquare /></a> 
        <a href="#"><FaLinkedin /></a>  
          </div>
           </div>

    </div>

        <div className="bg-orange-600 boder border-b-black h-1 mt-28"></div>

        <div className="flex justify-between">
          <div>
           <h1 className="text-bold text-xl mt-8">Made with 💖 by Amit kumar kannaujia</h1>
          </div>
  
          <div>
          <ul className="flex gap-6 mr-4 mt-8">
            <li><a href="#" className="text-bold text-md">Privacy Policy</a></li>
            <li><a href="#" className="text-bold text-md">Terms of Service</a></li>
            <li><a href="#" className="text-bold text-md">Cookies Settin</a></li>
            
          </ul>
          </div>


        </div>
        </section>  
     </>
  )
  }