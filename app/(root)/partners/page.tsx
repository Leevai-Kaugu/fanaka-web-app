import Nav from '@/components/nav/page'
import Image from "next/image";
import Scroll from "@/components/scroll/page";


import Metrics from "@/components/metrics/page";



export default function Home() {

  
  return (
   <Scroll>
      <div className='grid relative w-[100%] h-full'>         
        <Image
          src='/Nav bg-01.svg' // Home page background
          alt="page background"
          width={1100}
          height={900}
          className="col-start-1 row-start-1 w-full min-h-[80vh] object-cover"
        />
        <div className="flex w-[100%] flex-col col-start-1 row-start-1 z-1">
          <Nav/>
          <div className="flex flex-col items-center justify-center mt-[10vh]">
            <div className="flex flex-col md:flex-row mb-[5vh] items-center justify-center">
                <div className="md:w-[40%] w-[90%] md:text-start text-center">
                    <h2 className="text-fp text-[7vw] md:text-[2.5vw] uppercase cursor-pointer hover:scale-105 transition-transform duration-300 md:mb-[0px] mb-3">Partner With Us</h2>
                    <p className="w-full text-fg cursor-pointer hover:scale-105 transition-transform duration-300">At Fanaka, our vision is to revolutionize financial inclusion in Zambia and beyond, providing micro and small enterprises (MSMEs) with the tools and support they need to thrive. We aim to empower these enterprises by offering a holistic financial ecosystem, including financial literacy training, digital lending, and insurance linkages.</p>
                </div>
                <Image
                    src='/green house-01.svg' // Home page background
                    alt="Hero image"
                    width={1100}
                    height={900}
                    className="col-start-1 row-start-1 md:w-[40%] w-full cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                />
            </div>
          </div>
          <Scroll>
            <div className="flex h-auto justify-around mt-[10vh] flex-col items-center">
              <h1 className="uppercase md:text-[2vw] text-[5vw] text-fp">Our Partners</h1>
              <div className="w-full bg-flp p-10 flex flex-col md:flex-row w-[100%] mt-[5vh] gap-5 items-center justify-center">
                <Image
                    src='/LearnInk logo.png'
                    alt="Hero image"
                    width={1100}
                    height={900}
                    className="col-start-1 row-start-1 w-[40%] md:w-[7%] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <Image
                    src='/Bestlife-Logo.png'
                    alt="Hero image"
                    width={1100}
                    height={900}
                    className="col-start-1 row-start-1 w-[40%] md:w-[7%] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <Image
                    src='/cellulant.png'
                    alt="Hero image"
                    width={1100}
                    height={900}
                    className="col-start-1 row-start-1 w-[40%] md:w-[7%] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <Image
                    src='/axesfin.png'
                    alt="Hero image"
                    width={1100}
                    height={900}
                    className="col-start-1 row-start-1 w-[40%] md:w-[7%] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <Image
                    src='/digital africa.png'
                    alt="digital africa icon"
                    width={1100}
                    height={900}
                    className="col-start-1 row-start-1 w-[40%] md:w-[7%] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <Image
                    src='/Apex foundry.png'
                    alt="Hero image"
                    width={1100}
                    height={900}
                    className="col-start-1 row-start-1 w-[40%] md:w-[7%] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
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
