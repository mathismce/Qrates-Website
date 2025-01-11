import Image from "next/image";
import Navbar from "./ui/Navbar";
import ArtistSection from "./ui/ArtistSection";
import FormatsSection from "./ui/FormatsSection";
import StepsSection from "./ui/StepsSection";


export default function Home() {
  return (
    <div className="overflow-clip">
      <Navbar />
      <ArtistSection />
      <FormatsSection />
      <StepsSection />
      <div className="bg-black flex flex-col md:flex-row justify-center items-center md:justify-between py-12 px-10">
        <div className="flex gap-4">
          <h4 className=" text-white  text-4xl font-bold">
            Start a new project
          </h4><Image src="/right-arrow.png" alt="arrow right" width={40} height={20} />
        </div>
        <button className="bg-black border-2 border-white font-medium rounded-full text-white px-16 py-3 uppercase m-6">Make your own</button>
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row text-black bg-green">
          <div className="flex flex-col items-center gap-8 border-t-2 border-b border-black p-16">
            <h5 className="text-4xl font-bold">Vinyl</h5>
            <p className="text-center text-lg px-8 pl-20">
              We know how special pressed records are to you. Our products are built for fans, by fans. We make it easy for artists to press vinyl, so the music you love can keep reaching ears in the most beautiful way.
            </p>
            <Image
              className="w-[500px]"
              src="/vinyl.avif"
              alt="Vinyl"
              width={400}
              height={280}
              priority
            />
          </div>
          <div className="flex bg-pink flex-col items-center gap-8 border-t-2 border-b border-l-2 border-black p-16">
            <h5 className="text-4xl font-bold">Cassette</h5>
            <p className="text-center text-lg px-8 pr-20">
              Cassettes have always been special to music fans and artists. Whether you are saving a recording of a great concert, or preserving an early demo, there’s no better way to keep that music close than on cassette tapes.
            </p>
            <Image
              className="w-[500px]"
              src="/cassette.avif"
              alt="Cassettes"
              width={500}
              height={280}
              priority
            />
          </div>
        </div>
      </div>

    </div>
  );
}
