import Image from "next/image";
import Hero from "../components/Hero"
import Feauturedcar from "./featured car/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero /> ,
      <Feauturedcar />
      <Footer />
      
      

      
    </div>
  )
  }