import Link from "next/link"
export default function forms(){
    return(
        <div>
            <h1 className="text-5xl font-semibold text-center uppercase py-5">Enter Your Details</h1>
            <div>
                <form className="mt-10 flex gap-5 justify-center items-center flex-col border">
                <input type="Email" className="p-2 rounded-2xl w-2/5 border-blue-900 border-2" placeholder="Enter Your Email"></input>
                <input type="Password" className="p-2 rounded-2xl w-2/5 border-blue-900 border-2" placeholder="Enter Your Password"></input>
                <Link href="/thankyou"><button className="p-2 px-8 rounded-2xl bg-yellow-400">Place Your Order</button></Link>
                </form>
            </div>
        </div>
    )
}