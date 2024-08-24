import Link from "next/link";
import Image from "next/image";
export default function ArtIsNotAThing() {
  return (
    <div className=" w-[90vw] mx-[5vw] rounded-2xl h-full flex md:flex-row flex-col text-white pl-12 backdrop-blur-md bg-black/30 pt-10">
      <div className=" w-full h-1/2 md:w-1/3 md:h-full flex flex-col">
        <div className=" w-full h-3/4 flex flex-col">
          <div className=" w-full h-2/3 md:h-1/3 flex flex-col text-7xl font-bold font-clash text-white mb-10">
            Art is not a thing, it is a way.
          </div>
          <div className=" w-full h-1/3 hidden md:flex text-2xl font-medium font-manrope text-white">
            <div className=" w-2/3 h-full">
              Join us for an unforgettable celebration of boundless creativity
            </div>
            <div className=" w-1/3 h-full"></div>
          </div>
          <div className=" w-full h-1/3 flex flex-col font-manrope font-bold text-xl">
            <Link href="/explore">let’s EXPLORE -&gt;</Link>
          </div>
        </div>
      </div>
      <div className=" w-full h-1/2 md:w-1/3 md:h-full md:flex hidden px-20">
        <Image
          src="./art_women.svg"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />
      </div>
      <div className=" w-full h-1/2 md:w-1/3 md:h-full flex font-manrope">
        <div className=" w-full h-3/4 flex flex-col overflow-clip">
          <div className=" w-full h-1/3 flex flex-col overflow-clip">
            <div className=" w-full h-10 text-red-600 font-bold text-2xl border-b-2">
              01.
            </div>
            <div className="font-[400] text-xl pr-20">Immerse yourself in a tapestry of enlightening workshops hosted by industry luminaries</div>
          </div>
          <div className=" w-full h-1/3 flex flex-col overflow-clip">
            <div className=" w-full h-10 text-red-600 font-bold text-2xl border-b-2">
              02.
            </div>
            <div className="font-[400] text-xl pr-20">Unleash Your Potential Through Thrilling Competitive Events!</div>
          </div>
          <div className=" w-full h-1/3 flex flex-col overflow-clip">
            <div className=" w-full h-10 text-red-600 font-bold text-2xl border-b-2">
              03.
            </div>
            <div className="font-[400] text-xl pr-20">Showcase Your Skills and Win Big in Our Prestigious and Thrilling Challenges and Contests!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
