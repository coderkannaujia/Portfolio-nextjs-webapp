import Image from "next/image"
import { FaStar } from "react-icons/fa";

export default function Project(){
 return(
   <>
   {/* bg-cyan-500 */}
      <section className="about h-[500px] ">
       <div className="py-10 px-12 text-center items-center">
      <span className=" text-4xl font-bold mt-5 mb-10 border-b-4  ">My Portfolio</span>
     </div>
 
     <div>
      <span className=" text-2xl font-bold  mx-4 ">Recent project</span>
      
     </div>
       <div className=" flex justify-between gap-2 mx-2 mt-6  ">
      
        <div className="py-18 px-10 bg-cyan-50 border border-rose-500 rounded-md shadow-2xl  ">
        <Image src="/img1.jpg" width="600" height="400" className=" mt-8 rounded-lg  " ></Image>
          <h3 className="font-bold text-black mt-5 mb-3 text-center">Portfolio</h3>
         <p className="mt-8 font-semibold font-sans">Lorem ipsum dolor site amet ,consectutur adipisicing elit .amet quo numquam hello guys how are you </p>
        <h1 className=" mt-10  text-center font-bold  " href="#">Know more</h1>
        </div>
 
        <div className="py-18 px-10 bg-cyan-50 border border-rose-500 rounded-md shadow-2xl  ">
        <Image src="/img2.jpg" width="600" height="400" className=" mt-8  rounded-lg  " ></Image>
         <h3 className="font-bold text-black  mt-5 mb-3 text-center">Movify website</h3>
         <p className="mt-8 font-semibold font-sans">Lorem ipsum dolor site amet ,consectutur adipisicing elit .amet quo numquam hello guys how are you </p>
        <h1 className=" mt-10  text-center font-bold " href="#">Know more</h1>
        </div>


        <div className="py-18 px-10 bg-cyan-50 border border-rose-500  rounded-md shadow-2xl  mr-3 ">
          
        <Image src="/img3.jpg" width="600" height="400" className=" mt-8 rounded-lg  " ></Image>
         <h3 className="font-bold text-black text-center mt-5 mb-3">ToDo List</h3>
         <p className="mt-8 font-semibold font-sans">Lorem ipsum dolor site amet ,consectutur adipisicing elit .amet quo numquam hello guys how are you </p>
        <h1 className=" mt-10  text-center font-bold mb-4 " href="#">Know more</h1>
        </div>
       
       </div>
      </section>
 
   </>
 )
 
 }