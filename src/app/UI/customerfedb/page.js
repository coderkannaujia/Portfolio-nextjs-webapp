"use client"
import Image from "next/image"
import { FaStar } from "react-icons/fa";




export default function Customer(){
return(
  <>
      <section className="about bg-lime-100 mt-56  h-[570px] ">
       <div className="py-10 px-12 mt-4 ">
         <div className=" mt-4">
          <h1 className="font-semibold  ">client feedback</h1>
          <span className="font-bold text-2xl ">Customer testimonials</span>
       </div>
     
      <div className=" h-96 mt-12 mb-10 flex justify-between gap-6">
       <div className="border border-rose-500 py-8 h-80 rounded-lg px-5 shadow-2xl  ">
        <div className="flex justify-start">
        <FaStar /> <FaStar />  <FaStar />  <FaStar />  <FaStar /><FaStar /></div>
       
         <p className="mt-4 font-semibold text-xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p> 

         <div className="flex">
          <div>
          <Image src="/amit.png" width='90' height='90' className="  rounded-full mt-4 shadow-2xl bg-orange-200 mx-5 " ></Image>
          </div>
         <div>
          <h1 className="mt-6 font-bold font-md  ">Maxwell Russell</h1> 
          <h2 className=" font-serif ">Starbucks</h2> 
          </div>
        
         </div>
       </div>


       <div className="border border-rose-500 py-8 h-80 rounded-lg px-5  shadow-2xl">
       <div className="flex justify-start">
       <FaStar /><FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
     
         <p className="mt-4 font-semibold text-xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          <div className=" flex ">  
          <div>
          <Image src="/amit.png" width='90' height='90' className="  rounded-full mt-4 shadow-2xl bg-pink-200   mx-5 " ></Image>
          </div>
         <div>
          <h1 className="mt-6 font-bold font-md  ">Alex Russell</h1> 
          <h2 className=" font-serif ">Starbucks</h2> 
          </div>
         </div>
       </div>



       <div className="border border-rose-500 py-8 h-80 rounded-lg px-5 shadow-2xl ">
       <div className="flex justify-start">
       <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
         
         <p className="mt-4 font-semibold text-xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
          <div className=" flex " >
          <div>
          <Image src="/amit.png" width='90' height='90' className=" rounded-full mt-4 shadow-2xl bg-emerald-200 mx-5 " ></Image>
          </div>
         <div>
          <h1 className="mt-6 font-bold font-md  ">Olivia Russell</h1> 
          <h2 className=" font-serif ">Starbucks</h2> 
          </div>
         </div>
       </div>

      </div>
        
       
       </div>
      </section>
 
  
    
   </>
)
}