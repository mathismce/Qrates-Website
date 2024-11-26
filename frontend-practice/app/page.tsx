import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <nav className="flex items-center justify-between p-4 bg-background text-foreground font-xl">
        <div className="flex items-center space-x-4">
          <Image
            className="dark:invert"
            src="/qrates-logo.svg"
            alt="Qrates logo"
            width={40}
            height={28}
            priority
          />
          <span className="text-lg font-bold">Qrates</span>
        </div>
        <ul className="flex space-x-6">
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
        <div className="flex gap-4">
           <button>Log In</button>
           <button className="bg-black rounded-full text-white px-6 py-4">Make a record</button>
        </div>
      </nav>

      
    </div>
  );
}
