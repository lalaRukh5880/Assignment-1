import Link from "next/link";
;
import React from "react";

const Navbar =() => {
return (
    <div>
        <nav className="bg-black text-white h-15 py-5 px-5 flex justify-between items-center">
        
            <div>
                <img
                src="black logo.png" 
                className="w-15 h-20"
                />
                <h1 className='text-2xl font-semibold'>
                    <Link href="#!"> </Link>
                </h1>
            </div>
            <div>
                <ul className='flex space-x-4'>

                <li><a href="/" className="hover:text-red-600"> Search</a></li>
                    <li><Link href="" className="hover:text-red-600"> New Cars</Link></li>
                    <li><Link href="" className="hover:text-red-600"> Auto Store</Link></li>
                    <li><Link href="" className="hover:text-red-600"> Bikes</Link></li>
                    <li><Link href="" className="hover:text-red-600"> Videos</Link></li>
                   <li>< Link href="" className="hover:text-red-600"> Forms</Link></li>
                    <li><Link href="" className="hover:text-red-600"> Contact Us</Link></li>
                    <li><Link href="" className="hover:text-red-600"> Booking</Link></li>
                    

                    
                    
                </ul>
            </div>
            <div>
                <ul className='flex space-x-2'>
                    <li className="px-4 py-6"><Link href="#! "></Link>Login</li>
                    <li className="px-4 py-6"><Link href="#!"></Link>Sign up</li>
                    <button className="py-4 px-8 bg-red-600 text-white"> Post an Ad</button>
                </ul>
            </div>

            
        </nav>
        

    </div>
)
}
export default Navbar
