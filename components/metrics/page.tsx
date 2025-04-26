'use client'
import Counter from "../counter/page";
import Testimonials from "../testimonials/page";

export default function Metrics() {
    return (
        <div className="bg-gradient-to-tr from-fg to-fpd w-full flex flex-col rounded items-center">
            <div className="w-full flex justify-around items-center"><Testimonials/></div>
                <div className="flex flex-col bg-red-100 md:flex-row w-full md:w-[70%] h-fit text-white justify-between items-center p-[0px] md:p-[45px] mt-[10vh]">
                    <div className="w-full md:w-[50%] flex flex-row md:flex-col justify-evenly md:items-start items-center">
                        <p className="font-bold mb-[20px]">X jobs created for agents</p>
                        <div className="flex h-fit w-full">
                            <div className="flex flex-col items-start border-l-2 pl-4 pr-[20%]">
                                <Counter from={0} to={86} duration={3} />
                                <p>Women</p>
                            </div>
                            <div className="flex flex-col items-start border-l-2 pl-4 ">
                                <Counter from={0} to={47} duration={3} />
                                <p>youth (34 and under)</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] flex flex-row md:flex-col justify-evenly md:items-start items-center md:mt-[0px] mt-[10vh] md:mb-[0px] mb-[5vh]">
                        <p className="font-bold mb-[20px]">X MSMEs onboarded/served</p>
                        <div className="flex h-fit w-full">
                            <div className="flex flex-col items-start border-l-2 pl-4 pr-4">
                                <Counter from={0} to={86} duration={3} />
                                <p>women-led enterprises</p>
                            </div>
                            <div className="flex flex-col items-start border-l-2 pl-4 ">
                                <Counter from={0} to={47} duration={3} />
                                <p>youth-led enterprises</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}