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
          className="block md:hidden col-start-1 row-start-1 w-[100%] filter brightness-80 object-cover h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] absolute top-0 left-0 z-0 priority"
        />
        <Image
          src={background} // Home page background
          alt="Hero image"
          width={1100}
          height={900}
          className="hidden md:block col-start-1 row-start-1 w-[100%] filter brightness-80 object-cover h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] absolute top-0 left-0 z-0 priority"
        />
        <div className="flex w-[100%] flex-col col-start-1 row-start-1 z-1">
          <Nav/>
          <div className="flex flex-col my-[0px] md:my-[10%] md:ml-[5%] p-[0px] md:p-10 md-p-[0%]">
            <Hero/>
          </div>
          <Scroll>
            <div className="flex md:w-[100%] h-auto justify-around mt-[40vh] md:mt-[0px]">
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
