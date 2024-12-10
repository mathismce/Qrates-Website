import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <nav className="flex items-center justify-between p-4 bg-background text-foreground font-noto-sans-bold font-xl">
        <div className="flex items-center space-x-4">
          <Image
            className="dark:invert"
            src="/qrates-logo.svg"
            alt="Qrates logo"
            width={40}
            height={28}
            priority
          />
          <span className="text-lg font-noto-bold">Qrates</span>
        </div>
        <ul className="flex gap-8 uppercase font-semibold">
          <li>
            <a href="#discover" className="hover:underline">
              Discover
            </a>
          </li>
          <li>
            <a href="#search" className="hover:underline">
              Search
            </a>
          </li>
          <li>
            <a href="#why-qrates" className="hover:underline">
              Why Qrates
            </a>
          </li>
          <li>
            <a href="#why-qrates" className="hover:underline">
              Cart
            </a>
          </li>
        </ul>
        <div className="flex gap-4 font-noto-bold">
           <button>Log In</button>
           <button className="bg-black rounded-full text-white px-6 py-4">Make a record</button>
        </div>
      </nav>
      <div>
      <div className="flex flex-col items-center justify-items-center h-full bg-black p-8 gap-4 text-white 2xl:px-52 2xl:py-24 py-24 pb-36">
        <div className="flex gap-16 z-10 ">
          <div className="flex flex-col gap-6 w-[580px] p-4">
            <h2 className="text-sm font-semibold text-center border-[3px] w-[132px] p-2 border-4 tracking-widest uppercase">For Artists</h2>
            <h2 className="text-7xl font-bold mt-2 noto-bold">Music in your hands. Without the barriers.</h2>
            <p className="text-3xl mt-4 noto-bold">
                Full-service pressing, a global retail network, customer support — and you keep up to 85% of profits. ↓
            </p>
          </div>
          <Image
              className="rotate-12 w-[560px] mt-[20px] border-2 border-black z-0"
              src="/home-vinyl-picture.avif"
              alt="Qrates vinyl"
              width={700}
              height={700}
              priority
            />
        </div>
        <div className="flex">
            <Image
            className="-rotate-12 w-1/2 ml-40 mt-[-200px] w-[500px] z-0"
            src="/vinyl-picture.avif"
            alt="Qrates vinyl"
            width={900}
            height={900}
            priority
            />
            <Image
            className="-rotate-20 w-1/2 ml-32 mt-[-250px] w-[350px] z-20"
            src="/jeton.svg"
            alt="Qrates vinyl"
            width={800}
            height={800}
            priority
            />
        </div>
        </div>
        
      </div>
      <div className="bg-gray" >
        <h4 className="py-24 text-center text-5xl font-bold">Choose from two formats with promised quality</h4>
        <div>
          <div>
            <h5>Vinyl</h5>
            <p>We know how special pressed records are to you. Our products are built for fans, by fans. We make it easy for artists to press vinyl, so the music you love can keep reaching ears in the most beautiful way.</p>
          </div>
          <div>
            <h5>Cassette</h5>
            <p>Cassettes have always been special to music fans and artists. Whether you are saving a recording of a great concert, or preserving an early demo, there’s no better way to keep that music close than on cassette tapes.</p>
          </div>
        </div>
      </div>
      

      </div>
  );
}
