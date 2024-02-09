

export default function Contact(){
return(
  <>
      <section className="about  mt-24 bg-pink-100  h-[1000px] ">
       <div className="py-10 px-12 mt-4  ">
         <div className=" mt-4">
          <h1 className="font-semibold text-center ">Get In Touch</h1>
          <h1 className="font-bold text-2xl text-center">Contact me</h1>
          <p className="text-center mt-4">lorem jaldsfja lkasjdflka fajsldkfja;ls ljkasdfahsdf asjldkflaksjd fhasdlkflaj</p>
       </div>
     </div>
 

       <div className="border border-rose-500 py-8  h-3/4 w-3/4 ml-40 rounded-lg px-5 shadow-2xl ">
       
        <div className="flex justify-items-start gap-16">

         <div >
         <label className="ml-40  font-bold ">First Name:</label><br />
         <input className="ml-40  border w-72  px-2 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-700 rounded-md" type="text" placeholder="Enter your name" />
         </div>

         <div>
         <label className="ml-34 font-bold">Last Name:</label><br />
         <input className="ml-34 border w-72  px-2 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-700 rounded-md" type="text" placeholder="Enter your last name" />
         </div>

         </div>




         <div className="flex justify-items-start gap-16 mt-6 ">

          <div>
         <label className="ml-40 font-bold ">Email:</label><br />
         <input className="ml-40 border w-72  px-2 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-700 rounded-md  " type="text" placeholder="Enter your email" />
         </div>

         <div>
         <label className="ml-34 font-bold">Phone number:</label><br />
         <input className="ml-34  border w-72  px-2 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-700 rounded-md"  type="text" placeholder="enter your phone no" /> 
          </div>
      </div>

           <div className=" mt-6">
          <label className="ml-40 font-bold ">Choose a topic:</label><br />
          <input className="ml-40   border w-4/6 px-2 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-700 rounded-md  "  type="text"  placeholder="choose the topic" /> 
          </div>


          <div className=" mt-6">
          <label className="ml-40  font-bold">Message :</label><br />
          <input className="ml-40  border w-4/6 h-72 px-2 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-700 rounded-md "  type="text"  placeholder="enter your message" /> 
          </div>
         
         <div className="mt-2 inline-flex">
          <input className="ml-44  "  type="checkbox" />
          <h1 className="ml-2" >I accept the term</h1>
          </div>

           <button className="ml-96 bg-indigo-700 py-3 px-6 text-center rounded-lg text-white font-semibold  mt-4 mb-6 " type="submit">Submit</button>
         
        
         </div>
      </section>
 
  
   
   </>
)
}