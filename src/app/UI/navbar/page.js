import Header from "../header/page"
import Content from "../content/page"
import About from "../about/page"
import Project from "../project/page"
import Customer from "../customerfedb/page"
import Contact from "../contact/page"
import Footer from "../footer/page"

export default function Navbar() {
 return (
   <>

  <div className="flex justify-between bg-cyan-50  py-6 px-3 " >
   <span className="text-black font-semibold mt-2">amit kumar</span>

     <div className=" text-black text-md font-semibold">
   <ul className="flex space-x-4 gap-6 mt-2 " >
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#" >My project</a></li>
    <li><a href="#">Contact</a></li>
   </ul>
   </div>
  </div>
  
  <Header />
  <Content />
  <About />
  <Project /> 
  <Customer />
  <Contact />
  <Footer />
  
   </>
 )

}