import { GiSkills } from "react-icons/gi";

export default function Contect(){
return(
  <>
  {/* bg-cyan-500 */}
     <section className="about h-[500px] ">
      <div className="py-10 px-12 text-center items-center">
     <span className=" text-4xl font-bold mt-5 mb-10 border-b-4   ">My Expertise</span>
    </div>

    <div>
     <span className=" text-2xl font-bold  mx-4 ">My skill</span>
     
    </div>
      <div className=" grid grid-cols-4 gap-3 mx-2 mt-6  ">
     
       <div className="grid2-item py-6 px-4 rounded-md shadow-2xl bg-red-600  ">
        <h3 className="font-bold text-white mb-3">Full Stack Development</h3>
        <p>A full-stack developer is a versatile and skilled professional who possesses expertise in both front-end and back-end technologies, allowing them to work on all aspects of web development </p>
        <a href="#">Know more</a>
       </div>

       <div className="grid2-item py-6 px-4 bg-orange-500 rounded-md shadow-2xl">
        <h3 className="font-bold text-white mb-3">Android Development</h3>
        <p>An Android developer is a specialized professional with expertise in designing, developing, and maintaining applications for the Android operating system. These developers are well-versed in programming languages such as Java or Kotlin, which are commonly used for Android app development </p>
        <a href="#">Know more</a>
       </div>

       <div className="grid2-item py-6 px-4 bg-indigo-700 rounded-md shadow-2xl">
        <h3 className="font-bold text-white mb-3">UI & UX Design</h3>
        <p>A UI/UX designer is a creative professional focused on enhancing user satisfaction by improving the overall look, feel, and functionality of digital interfaces. UI (User Interface) designers concentrate on crafting visually appealing and intuitive layouts, ensuring that the design elements are aesthetically pleasing and user-friendly.</p>
        <a href="#">Know more</a>
       </div>

       <div className="grid2-item py-6 px-4 bg-emerald-600 rounded-md shadow-2xl">
        <h3 className="font-bold text-white mb-3">Webflow Development</h3>
        <p>A Webflow developer is a professional skilled in using the Webflow platform to design, prototype, and develop responsive and visually engaging websites. Webflow is a web design and development tool that allows for a code-free approach to building websites while providing the flexibility for those who want to incorporate custom code.</p>
       </div>
      </div>
     </section>

  </>
)

}