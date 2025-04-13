import Nav from "@/components/nav/page";
import Contact_us from "@/components/contact_us/page";
import Image from "next/image";
import background from "@/public/background.jpg"

export default function Home() {

  
  return (
   <div className='grid  relative w-[100%]'>
      <Image
        src={background} // public folder path
        alt="Fanaka client C.E.O Interacting with a client"
        width={1100}
        height={900}
        className="col-start-1 row-start-1 w-[100%] mask-b-from-20% mask-b-to-80% blur-[2px]"
      />
      <div className="flex w-[100%] flex-col col-start-1 row-start-1 z-1">
        <Nav/>
        <div className="flex flex-col items-center my-[20%]">
          <h1 className="text-[3rem]">FANAKA</h1>
          <h2>Growing with you ~ Learn, Borrow, Insure</h2>
          <Contact_us/>
        </div>
      </div>
   </div>
  );
}
