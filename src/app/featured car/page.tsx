import Link from "next/link"
export default function Feauturedcar(){
    return (
        <div>
            <div className="font-semibold text-2xl px-9 py-6 "><h1 className="mb-10 "> FEAUTURED NEW CARS </h1>
            <button className="px-5 hover:text-red-600"> Popular</button> 
            <button className="px-5 hover:text-red-600">Upcoming</button>
            <button className="px-5 hover:text-red-600">Newly Launched</button></div>
            <div className="h-96 w-full bg-slate-300 gap-10 flex flex-row py-4 px-24">
                <div className=" h-72 w-60 bg-white" >
                    <div className="h-60 w-full bg-red-700"> 
                     <Link href="car1">
                     <img src="toyota carolla pak wheels.jpg " className="h-60 w-full">
                     </img>
                     </Link>
                     <div className="flex justify-center flex-col font-semibold px-12"><h2>TOYOTA CAROLLA</h2>
                     <h3 className="text-green-400 "> PKR 59.7 - 75.5 lacs</h3></div>  
                    
                    </div>
 </div>

 <div className=" h-72 w-60 bg-white" >
                    <div className="h-60 w-full"> 
                     <Link href="car2">
                     <img src="Suzuki_Alto_-_PNG.png" className="h-60 w-full">
                     </img>
                     </Link>
                     <div className="flex justify-center flex-col font-semibold px-12"><h2>SUZUKI ALTO</h2>
                     <h3 className="text-green-400 ">PKR 23.3 - 30.5 lacs</h3></div>  
                    </div>
 </div>

 <div className=" h-72 w-60 bg-white" >
                    <div className="h-60 w-full"> 
                     <Link href="car3">
                     <img src="Alsvin_-_PNG.png " className="h-60 w-full">
                     </img>
                     </Link>
                     <div className="flex justify-center flex-col font-semibold px-12"><h2>CHANGAN ALSVIN</h2>
                     <h3 className="text-green-400 ">PKR 38.0 - 45.7 lacs</h3></div>  
                    
                    </div>
 </div>
 <div className=" h-72 w-60 bg-white" >
                    <div className="h-60 w-full"> 
                     <Link href="car4">
                     <img src="Fortuner_-_PNG.png" className="h-60 w-full">
                     </img>
                     </Link>
                     <div className="flex justify-center flex-col font-semibold px-12"><h2>TOYOTA FORTUNER</h2>
                     <h3 className="text-green-400 ">PKR 1.45 crore</h3></div>  
                    
                    </div>
 </div>
 




               
                



                
                
                
            </div>
            
        </div>
    )
}
