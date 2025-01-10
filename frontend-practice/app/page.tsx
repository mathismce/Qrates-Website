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
        <div className="flex flex-col md:flex-row bg-gray text-black">
          <div className="flex flex-col gap-4 p-16 items-center text-black bg-gray md:w-1/2">
            <p className="bg-white px-3 py-1 border-2 border-black font-medium">You</p>
            <h3 className="text-4xl font-semibold tracking-tight">Focus on making music</h3>
            <p className="text-center text-xl px-10">Qrates supports a wide range of artists while eliminating the hassles, costs and risks associated with pressing records, giving artists more time and income back in their hands.</p>
          </div>
          <div className="flex flex-col gap-4 p-16 items-center text-black bg-yellow md:w-1/2">
            <p className="bg-white px-3 py-1 border-2 border-black font-medium">QRATES</p>
            <h3 className="text-4xl font-semibold tracking-tight">We'll take care of the hassle</h3>
            <p className="text-center text-xl px-10">Qrates supports a wide range of artists while eliminating the hassles, costs and risks associated with pressing records, giving artists more time and income back in their hands.</p>
          </div>
        </div>
        <div className="flex-col flex md:flex-row text-black relative">
          <div className="flex flex-col gap-3 p-20 pr-20 items-end text-black bg-gray md:w-1/2">
            <h4 className="text-3xl font-semibold">Express your work on Qrates</h4>
            <p className="text-xl font-semibold">Qrates studio</p>
            <p className="text-right text-xl font-medium">Your product details should match the details of your music. Tweak and customize your vinyl, sleeve, jacket, and more.</p>
          </div>
          <div className="hidden absolute top-20 left-1/2 transform -translate-x-1/2 md:flex md:flex-col md:items-center">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center border-4 border-black">
              <p className="text-6xl font-semibold">1</p>
            </div>
            <div className="w-1 h-[600px] bg-black"></div>
            <img className="absolute top-[675px]" src="/arrow-down.png" alt="Qrates studio" width={30} height={30} />
          </div>
          <div className="flex flex-col gap-4 p-20 pl-20 items-center text-black bg-yellow md:w-1/2">
            <h4 className="text-3xl font-semibold">Over 120,000 customization possibilities
              3D Visualizer</h4>
            <p className="text-left text-xl font-medium">Choose from vinyl or cassette, each with a wide range of options including colors, packaging, obi strips, download cards, etc. There are over 120,000 variations of colors and specs for vinyl and cassette that can be customized in the Qrates Studio.
            </p>
            <Image src="/qrates-section-1.png" alt="Qrates studio" width={550} height={550} />
          </div>
        </div>
        <div className="flex-col flex md:flex-row text-black relative">
          <div className="flex flex-col gap-3 px-20 py-10 pr-20 items-end text-black bg-gray md:w-1/2">
              <h4 className="text-3xl font-semibold text-end">Start a Qrates page,
              </h4>
              <h4 className="text-3xl font-semibold text-end">
              confirm and pay for production costs.
              Pay up front? Crowdfunding?</h4>
              <p className="text-right text-xl font-medium">Pay for the production of your product in advance and start production immediately, or choose the crowdfunding option and press as many copies you like with pledges you collect from your fans.</p>
            <p className="text-lg font-semibold">Qrates page and Artist page
            </p>
            <p className="text-right text-xl font-medium">The Qrates page is your storefront on Qrates to sell your music. The Artist page is your profile page. Upload your images to the template provided and fill in the form to set it up.</p>
            <Image src="/section3-cd.avif" alt="Qrates studio" width={550} height={550} />
          </div>
          <div className="hidden absolute top-5 left-1/2 transform -translate-x-1/2 md:flex md:flex-col md:items-center">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center border-4 border-black">
              <p className="text-6xl font-semibold">2</p>
            </div>
            <div className="w-1 h-[600px] bg-black"></div>
            <img className="absolute top-[675px]" src="/arrow-down.png" alt="Qrates studio" width={30} height={30} />
          </div>
          <div className="flex flex-col gap-4 px-20 py-10 pl-20 items-start text-black bg-yellow md:w-1/2">
            <h4 className="text-3xl font-semibold">We support a wide range of artists' needs</h4>
            <p className="text-lg text-right font-semibold">Small production minimums
            </p>
            <p className="text-left text-xl font-medium">Vinyl records can be made from 100 copies, and cassette tapes from 50 copies.
            </p>
            <p className="text-lg text-right font-semibold">Select the payment option
            </p>
            <p className="text-left text-xl font-medium">You can pay for the production of your product in advance and begin the production process immediately. We also have a pre-order function, which allows you to take orders during production until completion, and the crowdfunding method, which allows you to collect orders in advance and then begin the manufacturing process. If you don't want to pay for the production costs upfront, or if you want to collect orders from your fans before deciding on the final number of pieces to be produced, try crowdfunding. No risk, no waste.
            </p>
            <p className="text-lg text-right font-semibold">Easily customizable your Qrates page and artist page
            </p>
            <p className="text-left text-xl font-medium">Qrates provides easy-to-setup templates for the Qrates page and the artist profile page. The Qrates page for selling your music can be set up to include audio samples, embedded videos, and comments from fans, making it a great promotional tool.</p>
            <Image src="/qrates-section-1.png" alt="Qrates studio" width={550} height={550} />
          </div>
        </div>
        <div className="flex-col flex md:flex-row text-black relative">
          <div className="flex flex-col gap-3 px-20 pr-20 items-end text-black bg-gray md:w-1/2">
              <h4 className="text-3xl font-semibold text-end">Start a Qrates page,
              </h4>
              <h4 className="text-3xl font-semibold text-end">
              confirm and pay for production costs.
              Pay up front? Crowdfunding?</h4>
              <p className="text-right text-xl font-medium">Pay for the production of your product in advance and start production immediately, or choose the crowdfunding option and press as many copies you like with pledges you collect from your fans.</p>
            <p className="text-xl font-semibold">Qrates page and Artist page
            </p>
            <p className="text-right text-xl font-medium">The Qrates page is your storefront on Qrates to sell your music. The Artist page is your profile page. Upload your images to the template provided and fill in the form to set it up.</p>
          </div>
          <div className="hidden absolute top-5 left-1/2 transform -translate-x-1/2 md:flex md:flex-col md:items-center">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center border-4 border-black">
              <p className="text-6xl font-semibold">2</p>
            </div>
            <div className="w-1 h-[600px] bg-black"></div>
            <img className="absolute top-[675px]" src="/arrow-down.png" alt="Qrates studio" width={30} height={30} />
          </div>
          <div className="flex flex-col gap-4 px-20 pl-20 items-center text-black bg-yellow md:w-1/2">
            <h4 className="text-3xl font-semibold">Over 120,000 customization possibilities
              3D Visualizer</h4>
            <p className="text-left text-xl font-medium">Choose from vinyl or cassette, each with a wide range of options including colors, packaging, obi strips, download cards, etc. There are over 120,000 variations of colors and specs for vinyl and cassette that can be customized in the Qrates Studio.
            </p>
            <Image src="/qrates-section-1.png" alt="Qrates studio" width={550} height={550} />
          </div>
        </div>
      </div>

    </div>
  );
}
