'use client'
import Counter from "../counter/page";
import Testimonials from "../testimonials/page";

export default function Metrics() {
    return (
        <div className="bg-gradient-to-tr from-fg to-fpd w-full flex flex-col rounded items-center">
            <div className="w-full flex justify-around items-center"><Testimonials/></div>
                <div className="flex flex-col md:flex-row w-full md:w-[70%] h-fit text-white justify-between items-center p-[0px] md:p-[45px] mt-[10vh]">
                    <div className="w-full md:w-[50%] flex flex-col  justify-evenly md:items-start items-center">
                        <p className="font-bold mb-[20px] md:text-white text-flp">X jobs created for agents</p>
                        <div className="flex h-fit w-full flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
                            <div className="flex gap-2 md:gap-[0px] justify-around md:flex-col md:items-start items-center md:border-l-2 md:pl-4 md:pr-[20%]">
                                <Counter from={0} to={86} duration={3} />
                                <p>Women</p>
                            </div>
                            <div className="flex md:flex-col md:items-start md:border-l-2 md:pl-4 justify-around items-center gap-2 md:gap-[0px]">
                                <Counter from={0} to={47} duration={3} />
                                <p>youth (34 and under)</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] flex flex-col justify-evenly md:items-start items-center md:mt-[0px] mt-[10vh] md:mb-[0px] mb-[5vh]">
                        <p className="font-bold mb-[20px] md:text-white text-flp">X MSMEs onboarded/Served</p>
                        <div className="flex h-fit w-full flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
                            <div className="flex gap-2 md:gap-[0px] md:flex-col md:items-start items-center md:border-l-2 md:pl-4 md:pr-4 justify-around ">
                                <Counter from={0} to={86} duration={3} />
                                <p>women-led enterprises</p>
                            </div>
                            <div className="flex md:flex-col gap-2 md:gap-[0px] md:items-start items-center md:border-l-2 md:pl-4 ">
                                <Counter from={0} to={47} duration={3} />
                                <p>youth-led enterprises</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}