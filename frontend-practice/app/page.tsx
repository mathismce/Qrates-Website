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
      <div className="flex flex-col bg-black p-8 rounded-lg text-white lg:px-52 lg:py-24">
        <div className="flex">
          <div className="flex flex-col gap-4 w-1/2">
            <h2 className="text-xs font-semibold text-center border w-32 p-2 border-2 tracking-widest uppercase">For Artists</h2>
            <h2 className="text-6xl font-bold mt-2 noto-bold">Music in your hands. Without the barriers.</h2>
            <p className="text-2xl mt-4 font-bold noto-bold">
                Full-service pressing, a global retail network, customer support — and you keep up to 85% of profits. ↓
            </p>
          </div>
            <Image
              className="rotate-12 w-1/2"
              src="/home-vinyl-picture.avif"
              alt="Qrates vinyl"
              width={800}
              height={800}
              priority
            />
        </div>
        <Image
            className="-rotate-12 w-1/2"
            src="/vinyl-picture.avif"
            alt="Qrates vinyl"
            width={800}
            height={800}
            priority
          />
      </div>
        <div>
        <div>
        
          
        </div>
    </div>
      </div>
    </div>
  );
}
