import Nav from '@/components/nav/page';
import We_do from '@/components/our_values/page'
import Our_team from '@/components/our_team/page'
import Image from "next/image";
import background from "@/public/Nav bg-01.svg"
import Scroll from "@/components/scroll/page";




export default function Home() {

  
  return (
   <Scroll>
      <div className='grid relative w-[100%] h-full'>         
        <Image
          src={background} // Home page background
          alt="Hero image"
          width={1100}
          height={900}
          className="col-start-1 row-start-1 w-[100%] object-cover"
        />
        <div className="flex w-[100%] flex-col col-start-1 row-start-1 z-1">
          <Nav/>
            <div >
                <div className='mt-[10vh] w-[100%] col-start-1 row-start-1 z-1 justify-center'>
                    <div className='flex flex-col items-center justify-center mb-[5vh]'>
                        <h1 className='text-[2vw] text-white font-bold'>ABOUT US</h1>
                        <p className='text-fp text-[2vw]'>Vision Statement</p>
                        <p className='text-white w-[40%] text-center'>A Zambia where every enterprise, no matter how small, has the financial tools, knowledge, and network to thrive</p>
                    </div>
                    <We_do/>
                </div>
                <div className='w-full flex justify-center flex-col items-center mt-[15vh]'>
                    <div className='text-[1.5rem] mb-[5vh] text-fp'>Our Team</div>
                    <Our_team/>
                </div>
            </div>                                                    
        </div>
    </div>
   </Scroll>
  );
}
