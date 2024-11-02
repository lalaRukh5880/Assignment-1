import react from 'react'
import link from 'next/link'
import Link from 'next/link'
const Footer =()=>{
    return(
        <div>
            <footer className="bg-black text-white h-32 w-full py-5 px-5 flex flex-row justify-between items-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-x1 font-bold mb-4"> Contact Us</h2>
                    <ul className="underline">03-xxxxxxx</ul>
                </div>
                
                <div>
                <h2 className="text-x1 font-bold mb-4"> Social Links</h2>
                <div>
                    <Link href="https://github.com/lalaRukh5880" className="underline"> GitHub </Link>
                </div>
                </div>
                </div>
                <div>
                <h2 className="text-x1 font-bold mb-4"> Email</h2>
                <ul className="underline">lalarukh5880@gmail.com</ul>


                </div>
                </footer>
                <div className="flex justify-center text-white bg-red-600">
                    <h1>Create By LalaRukh </h1>
                </div>
        </div>
    )
}
export default Footer