import Nav from "@/components/nav/page";
import Hero from "@/components/hero/page"
import Image from "next/image";
import background from "@/public/front-view-woman-carrying-harvest.jpg"
import Summary from "@/components/about_summary/page"
import Scroll from "@/components/scroll/page";
import Metrics from "@/components/metrics/page";



export default function Home() {

  
  return (
   <Scroll>
      <div className='grid relative w-[100%] h-full'>         
        <Image
          src={background} // Home page background
          alt="Hero image"
          width={1100}
          height={900}
          className="col-start-1 row-start-1 w-[100%] filter brightness-80"
        />
        <div className="flex w-[100%] flex-col col-start-1 row-start-1 z-1">
          <Nav/>
          <div className="flex flex-col my-[10%] ml-[10%]">
            <Hero/>
          </div>
          <Scroll>
            <div className="flex w-[100%] h-auto justify-around mt-[40vh]">
              <Summary/>
            </div>   
          </Scroll>                                                      
          <Scroll>
            <div className="mt-[20vh]">
              <Metrics/>
            </div>
          </Scroll>
        </div>
    </div>
   </Scroll>
  );
}
