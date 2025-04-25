'use client'
import Counter from "../counter/page";
import Testimonials from "../testimonials/page";

export default function Metrics() {
    return (
        <div className="bg-gradient-to-tr from-fg to-fpd w-full flex flex-col rounded items-center">
            <div className="w-full flex justify-around items-center"><Testimonials/></div>
                <div className="flex w-[70%] h-fit text-white justify-between items-center p-[45px] mt-[10vh]">
                    <div className="w-[50%] flex flex-col justify-evenly items-start">
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
                    <div className="w-[50%] flex flex-col justify-evenly items-start">
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