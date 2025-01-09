import Image from "next/image";

export default function ArtistSection() {
  return (
    <div className="flex flex-col items-center justify-items-center h-full bg-black gap-4 text-white 2xl:px-52 2xl:py-24 pb-36">
      <div className="flex flex-col lg:flex-row gap-16 z-10 p-6 max-w-full">
        <div className="flex flex-col gap-6 w-full lg:w-[580px] p-4">
          <h2 className="text-sm font-semibold text-center border-[3px] w-[132px] p-2 border-4 tracking-widest uppercase">For Artists</h2>
          <h2 className="text-4xl lg:text-7xl font-bold mt-2 noto-bold">Music in your hands. Without the barriers.</h2>
          <p className="text-lg lg:text-3xl mt-4 noto-bold">
            Full-service pressing, a global retail network, customer support — and you keep up to 85% of profits. ↓
          </p>
        </div>
        <Image
          className="rotate-12 w-full lg:w-[500px] mt-[20px] border-2 border-black z-0"
          src="/home-vinyl-picture.avif"
          alt="Qrates vinyl"
          width={500}
          height={400}
          priority
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        <Image
          className="-rotate-12 w-full lg:w-1/2 ml-0 lg:ml-40 mt-[-100px] lg:mt-[-200px] z-0"
          src="/vinyl-picture.avif"
          alt="Qrates vinyl"
          width={900}
          height={900}
          priority
        />
        <Image
          className="-rotate-20 w-full lg:w-1/2 ml-0 lg:ml-32 mt-[-150px] lg:mt-[-250px] z-20"
          src="/jeton.svg"
          alt="Qrates vinyl"
          width={800}
          height={800}
          priority
        />
      </div>
    </div>
  );
}