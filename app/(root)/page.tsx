import Nav from "@/components/nav/page";
import Hero from "@/components/hero/page";
import Image from "next/image";
import Summary from "@/components/about_summary/page";
import Scroll from "@/components/scroll/page";
import Metrics from "@/components/metrics/page";


export default function Home() {
  return (
    <div className="font-poppins grid relative w-full h-full bg-white">
        {/* Responsive Background Image */}
        <Image
          src='/front-view-woman-carrying-harvest.jpg'
          alt="Woman carrying harvest"
          width={1100}
          height={900}
          priority
          className="col-start-1 row-start-1 w-full h-screen object-cover filter brightness-80 absolute top-0 left-0 z-0"
        />

        {/* Content */}
        <div className="flex w-full flex-col col-start-1 row-start-1 z-10 relative">
          <Nav />

          <div className="flex flex-col my-0  md:ml-[5%] p-0 md:p-10">
            <Hero />
          </div>

          <div className="flex md:w-full justify-around mt-[40vh] md:mt-0">
            <Summary />
          </div>

          <div className="mt-[20vh]">
            <Metrics />
          </div>
        </div>
      </div>
  );
}
