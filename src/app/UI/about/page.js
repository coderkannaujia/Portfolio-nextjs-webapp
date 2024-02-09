import Image from "next/image"



export default function About(){
 return(
<>
<section className="main bg-cyan-50 h-full py-6 ">         
 <div className="flex justify-around">

 <div className="flex content-center items-center rounded-full
      shadow-lg">
    <Image src="/amit.png" width="600" height="400" className= " rounded-full "></Image>
      </div>

    <div className="mt-10 py-32 ml-4 ">
     <h1 className="text-orange-600 font-bold text-xl mx-3">WEB DEVELOPER</h1>
      <span className="text-3xl font-bold text-black mx-3">Hello ,my name is Amit kumar kannaujia.... </span>
      <p className="mt-4 w-1/2 text-lg text-black mx-3">“Your job as a developer is not just to create code that you can work with easily, but to create code that others can also work with easily.” </p>

      <button className="bg-orange-600 py-2 px-3 mt-10 ml-4 rounded-lg shadow-2xl">
      <i class="fa-solid fa-address-book"></i>
       Contact me</button>
      <button className="bg-orange-600 py-2 px-3 mt-10 ml-4 rounded-lg shadow-2xl">
      <i class="fa-solid fa-download"></i>
       Download cv</button>
    </div>

    

</div>

</section>


</>
 )
}