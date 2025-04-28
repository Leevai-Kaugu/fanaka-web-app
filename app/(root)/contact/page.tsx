import Nav from '@/components/nav/page'
import green from "@/public/green house-01.svg"
import Image from "next/image";
import background from "@/public/Nav bg-01.svg"
import apex from "@/public/Apex foundry.png"
import Scroll from "@/components/scroll/page";
import learn from '@/public/LearnInk logo.png'
import cellulant from '@/public/cellulant.png'
import axesfin from '@/public/axesfin.png'
import bestlife from '@/public/Bestlife-Logo.png'
import digital from '@/public/digital africa.png'
import Metrics from "@/components/metrics/page";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import MessageForm from '@/components/messageForm/page'



export default function Home() {

  
  return (
   <Scroll>
      <div className='grid relative w-[100%] h-full items-center'>         
        <Image
          src={background} // Home page background
          alt="Hero image"
          width={1100}
          height={900}
          className="col-start-1 row-start-1 w-[100%] min-h-[80vh] object-cover"
        />
        <div className="flex w-[100%] flex-col col-start-1 row-start-1 z-1">
          <Nav/>
          <div className='col-start-1 row-start-1 z-1 w-full sel-f-center flex justify-center md:mt-[25vh] mt-[10vh]'>
                <div className='w-[90%] md:w-[80%] h-fit bg-flp p-10 flex' style={{ boxShadow: '0 8px 50px rgba(0,0,0,0.2)' }}>
                    <div className='flex md:flex-row flex-col w-full justify-around items-center'>
                        <div className='md:w-[40%] w-full md:text-start text-center'>
                            <h1 className='text-fp text-[7vw] md:text-[2vw] font-bold'>Contact</h1>
                            <p className='text-white'>Have a question about how we might help you? Give us a call or visit our offices</p>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-2 w-full'>
                                <div>
                                    <div className='flex gap-3 items-center mt-[5vh] text-fp md:justify-start justify-center'>
                                        <FaPhoneAlt className='fill-fp'/>
                                        <p>Contact</p>
                                    </div>
                                    <p className='text-white'>+260 772829799</p>
                                </div>
                                <div>
                                    <div className='flex gap-3 items-center mt-[5vh] text-fp md:justify-start justify-center'>
                                        <FaClock className='fill-fp'/>
                                        <p>Working Hours</p>
                                    </div>
                                    <p className='text-white'>8:am - 5:pm, Mon - Sat</p>
                                </div>
                                <div>
                                    <div className='flex gap-3 items-center mt-[5vh] text-fp md:justify-start justify-center'>
                                        <FaLocationDot className='fill-fp'/>
                                        <p>Location</p>
                                    </div>
                                    <p className='text-white'>Arcades, Office No_203 2nd Floor, Blue House Lusaka, Zambia </p>
                                </div>
                                <div>
                                    <div className='flex gap-3 items-center mt-[5vh] text-fp md:justify-start justify-center'>
                                        <IoIosMail className='fill-fp size-[1.4em]'/>
                                        <p>Mail</p>
                                    </div>
                                    <p className='text-white'>info@fanakatech.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[40%] w-full mt-[5vh] md:mt-0'>
                            <MessageForm/>
                        </div>
                    </div>
                </div>
            </div>                                                    
        </div>
    </div>
   </Scroll>
  );
}
