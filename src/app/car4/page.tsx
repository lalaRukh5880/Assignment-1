import Link from "next/link"
export default function car4() {
    return (
        <div>
            <div className="flex justify-center items-center my-20">
                <h1 className="font-semibold text-3xl underline">Toyota Fortuner 2024 Price in  Pakistan,Images,Reviews,& Specs</h1></div>
            <div className="flex justify-center my-25">
                <img src="car1 carolla.jpg" className="h-80 w-70" />
            </div>
            <div className="flex justify-center space-x-4">
                <button className="bg-blue-800 text-white py-4 px-8 rounded-md "> Book A Test Drive</button>
                <button className=" hover: bg-white text-blue-800 py-4 px-8 rounded-md border-2 border-blue-800 "> Request Bank finance</button>
                <button className=" hover: bg-white text-blue-800 py-4 px-8 rounded-md border-2 border-blue-800 "> Visit place</button>
                <button className=" hover: bg-white text-blue-800 py-4 px-8 rounded-md border-2 border-blue-800"> Car Inspection</button>

            </div>
            <div className="flex justify-center space-x-6 py-10">
                <h1 className="font-semibold text-4xl">Vehicle Desription </h1>
            </div>
            <div className="flex justify-center space-x-2 py-5">
                <div className="font-bold">Number Of Doors</div>
                <div>4</div>
                <div className="font-bold space-x-1">Engine</div>
                <div>1800 CC</div>
                <div className="font-bold"> Condition</div>
                <div>8.5 / 10</div>
                <div className="font-bold">Driven</div>
                <div>9,500 KM</div>
                </div>
                <div className="flex justify-center">
                <div className="font-bold px-1"> Suspension Type</div>
                <div> Soft Suspension </div>
                <div className="font-bold "> Avg</div>
                <div> 13 km per hr</div>
                <div className="font-bold">Transmission</div>
                <div> Automatic</div>
                <div className="font-bold">Fuel Type</div>
                <div>High Octane</div>
            </div>
            
            <div className="flex justify-center space-x-2 py-5">
                <h1 className="text-green-600 text-2xl"> PKR 1.45 crore</h1>
            </div >
            <div className="flex justify-center space-x-6 py-10">
            <Link href="/form"><button className="bg-blue-800 py-4 px-8 rounded-md border-2 border-blue-950">Make Payment </button></Link>
            </div>


        </div>

    )
}