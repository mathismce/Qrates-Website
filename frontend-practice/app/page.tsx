import Image from "next/image";
import Navbar from "./ui/Navbar";
import ArtistSection from "./ui/ArtistSection";
import FormatsSection from "./ui/FormatsSection";


export default function Home() {
  return (
    <div className="overflow-clip">
      <Navbar />
      <ArtistSection />
      <FormatsSection />
      <div className="flex flex-col">
        <div className="flex-col md:flex md:flex-row bg-gray text-black">
          <div className="flex flex-col gap-4 p-16 items-center text-black bg-gray w-1/2">
            <p>You</p>
            <h3>Focus on making music</h3>
            <p>You can focus on your music production with peace of mind: the Artist Toolkit has lots of information about music production, knowledge about vinyl records and cassettes, and tips on how to sell your music. Artist Toolkit</p>
          </div>
          <div className="flex flex-col gap-4 p-16 items-center text-black bg-yellow w-1/2">
            <p>QRATES</p>
            <h3>We'll take care of the hassle</h3>
            <p>Qrates supports a wide range of artists while eliminating the hassles, costs and risks associated with pressing records, giving artists more time and income back in their hands.</p>
          </div>
        </div>
        <div className="flex-col md:flex md:flex-row bg-gray text-black relative">
          <div className="flex flex-col gap-3 p-16 items-end text-black bg-gray w-1/2">
            <h4 className="text-3xl font-semibold">Express your work on Qrates</h4>
            <p className="text-xl font-semibold">Qrates studio</p>
            <p className="text-right text-xl font-medium">Your product details should match the details of your music. Tweak and customize your vinyl, sleeve, jacket, and more.</p>
          </div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center border-4 border-black">
              <p className="text-5xl font-semibold">1</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-16 items-center text-black bg-yellow w-1/2">
            <h4 className="text-3xl font-semibold">Over 120,000 customization possibilities
              3D Visualizer</h4>
            <p className="text-left text-xl font-medium">Choose from vinyl or cassette, each with a wide range of options including colors, packaging, obi strips, download cards, etc. There are over 120,000 variations of colors and specs for vinyl and cassette that can be customized in the Qrates Studio.
            </p>
            <Image src="/qrates-section-1.png" alt="Qrates studio" width={500} height={500} />
          </div>
        </div>
      </div>

    </div>
  );
}
