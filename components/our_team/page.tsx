'use client';
import Image from "next/image";
import buuya from "@/public/BUUYA.png";
import hillary from '@/public/HILA.png'
import deno from '@/public/DENO.png'

export default function Our_team() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-[70%]">
        <div className="group w-50 h-50 [perspective:1000px] cursor-pointer">
            <div className="relative w-full h-full transition-transform duration-700             [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] shadow-xl">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden overflow-hidden">
                    <Image
                        width={300}
                        height={300}
                        src={hillary}
                        alt='team member'
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-900 text-white [transform:rotateX(180deg)] flex flex-col justify-center items-center p-4">
                <h2 className="text-lg font-bold mb-2">Hillary</h2>
                <p className="text-sm text-gray-300">FOUNDER & C.E.O</p>
                </div>
            </div>
        </div>
        <div className="group w-50 h-50 [perspective:1000px] cursor-pointer">
            <div className="relative w-full h-full transition-transform duration-700             [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] shadow-xl">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden overflow-hidden">
                    <Image
                        width={300}
                        height={300}
                        src={buuya}
                        alt='team member'
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-900 text-white [transform:rotateX(180deg)] flex flex-col justify-center items-center p-4">
                <h2 className="text-lg font-bold mb-2">Buuya</h2>
                <p className="text-sm text-gray-300">Operations Manager</p>
                </div>
            </div>
        </div>
        <div className="group w-50 h-50 [perspective:1000px] cursor-pointer">
            <div className="relative w-full h-full transition-transform duration-700             [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] shadow-xl">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden overflow-hidden">
                    <Image
                        width={300}
                        height={300}
                        src={deno}
                        alt='team member'
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-900 text-white [transform:rotateX(180deg)] flex flex-col justify-center items-center p-4">
                <h2 className="text-lg font-bold mb-2">Denis</h2>
                <p className="text-sm text-gray-300">Tech Associate</p>
                </div>
            </div>
        </div>
    </div>
  );
}
