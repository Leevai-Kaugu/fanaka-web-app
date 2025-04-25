import Nav from "@/components/nav/page";
import AgentLink from '@/components/agent_link/page';
import Socials from '@/components/socials/page';
import oops from '@/public/no idea-01.svg';
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
          className="col-start-1 row-start-1 w-[100%]"
        />
        <div className="flex w-[100%] flex-col col-start-1 row-start-1 z-1">
          <Nav/>
          <div >
            <div className='w-[100%] col-start-1 row-start-1 z-1 justify-center mt-[20vh]'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[2vw] text-fp font-bold'>CAREERS</h1>
                    <p className='text-white w-[40%] text-center'>Grow With Us ~ Discover opportunities to build something amazing, challenging, inspiring, and rewarding</p>
                </div>
            </div>
            <div className='w-full flex justify-center flex-col items-center col-start-1 row-start-1 z-1 justify-center mt-[30vh]'>
                <div className='text-[1.5rem] mb-[5vh] text-fp'>Why work with us</div>
                    <div className='flex gap-[5vw] items-center justify-center text-center'>
                        <div className='py-5 px-10 bg-flp text-white w-[20%] '>
                            <h2 className="text-fp font-bold mb-[3vh]">Make Real Impact</h2>
                            <p>At Fanaka, your work directly empowers small businesses to grow, create jobs, and strengthen communities</p>
                        </div>
                        <div className='py-5 px-10 bg-flp text-white w-[20%] '>
                            <h2 className="text-fp font-bold mb-[3vh]">Join a Supportive Team</h2>
                            <p>Fanaka is built on collaboration, respect, and shared success — you'll be part of a passionate team that believes in making finance accessible and fair.</p>
                        </div>
                        <div className='py-5 px-10 bg-flp text-white w-[20%] '>
                            <h2 className="text-fp font-bold mb-[3vh]">Grow With Purpose</h2>
                            <p>We’re committed to your professional development, offering mentorship, skills training, and opportunities to advance as you help entrepreneurs succeed.</p>
                        </div>
                    </div>
                    <div className='text-[1.5rem] mt-[5%] text-fp'>
                        <Image
                        src={oops} // Oooops image for this section
                        alt="Hero image"
                        width={1100}
                        height={900}
                        className="col-start-1 row-start-1 w-[100%] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out" 
                        />
                    </div>
                    <div className='mt-[10vh] w-[60%] text-center'>
                        <p>Ooops! Currently there are no vacant opportunities availble. Don’t worry, we keep updating our social media pages when vacancies are available. Check us out!</p>
                    </div>
                    <div className='w-[10%]'>
                        <Socials/>
                    </div>
                    <AgentLink/>
                </div>
            </div>                                                    
        </div>
    </div>
   </Scroll>
  );
}
