import Image from "next/image";
export default function Background() {
  return (
    <div className="absolute top-20 left-0 w-screen h-[500vh] z-[-1] ">
      <div className="w-screen h-[100vh] absolute">
        <Image
          src={"/assets/images/Grid.svg"}
          width={0}
          height={0}
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        />
      </div>
      <div className="h-[300vh] w-screen absolute top-[60vh] overflow-visible flex flex-col justify-start">
        <Image
          src={"/assets/images/Frame.svg"}
          width={0}
          height={0}
          style={{ width: "100vw", height: "400vh", objectFit: "contain",objectPosition:'top'}}
        />
      </div>
      <div className="h-[100vh] w-screen absolute overflow-visible top-[300vh] flex flex-col justify-start">
        <Image
          src={"/assets/images/Frame.svg"}
          width={0}
          height={0}
          style={{ width: "100vw", height: "400vh", objectFit: "contain", objectFit: "contain",objectPosition:'top'}}
        />
      </div>
    </div>
  );
}
