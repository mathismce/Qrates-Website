import Image from "next/image";

export default function ProjectSection() {
  return (
    <>

      {/* Section Start a new project */}
      <div className="bg-black flex flex-col md:flex-row justify-center items-center md:justify-between py-12 px-10">
        <div className="flex gap-4">
          <h4 className="text-white text-4xl font-bold">Start a new project</h4>
          <Image src="/right-arrow.png" alt="arrow right" width={40} height={20} />
        </div>
        <button className="bg-black border-2 border-white font-medium rounded-full text-white px-16 py-3 uppercase m-6">
          Make your own
        </button>
      </div>

      {/* Toolkit and Support Section */}
      <div className="flex flex-col md:flex-row text-black bg-green">
        <div className="flex flex-col items-center gap-8 border-t-2 border-b border-black p-16">
          <Image
            className="w-[600px]"
            src="/artist-toolkit.avif"
            alt="Vinyl"
            width={600}
            height={380}
            priority
          />
          <p className="bg-white px-4 py-2 border-2 border-black font-semibold text-sm">
            ARTIST TOOLKIT
          </p>
          <h5 className="text-4xl font-bold text-center">
            Take you and your works to next level.
          </h5>
          <p className="text-center text-xl px-8">
            We have a lot of information and tips about music production, physical formats, and
            music business for you.
          </p>
          <button className="bg-black font-medium rounded-full text-white px-16 py-3 uppercase">
            Learn more
          </button>
        </div>

        <div className="flex bg-pink flex-col items-center gap-8 border-t-2 border-b border-l-2 border-black p-16">
          <Image
            className="w-[600px]"
            src="/customer-support.avif"
            alt="Cassettes"
            width={600}
            height={380}
            priority
          />
          <p className="bg-white px-4 py-2 border-2 border-black font-semibold text-sm">
            CUSTOMER SUPPORT
          </p>
          <h5 className="text-4xl font-bold text-center px-8">
            Here to help, whenever you need it.
          </h5>
          <p className="text-center text-xl px-8">
            Whether you’re an artist in the middle of production or a fan with questions about your
            order, our team is here to help.
          </p>
          <button className="bg-black font-medium rounded-full text-white px-16 py-3 uppercase">
            Contact us
          </button>
        </div>
      </div>

      {/* Community Section */}
      <div className="flex flex-col text-black bg-white p-16 px-44 items-center gap-8">
        <p className="border-2 text-sm border-black px-3 py-1 uppercase">Community</p>
        <h4 className="text-4xl font-semibold">Join a growing community.</h4>
        <p className="text-xl text-center px-44">
          We're building a home for the next generation of vinyl lovers and cassette junkies. Get
          in front of fans, connect with artists, labels, and stores.
        </p>
        <button className="bg-white font-semibold rounded-full text-black border-2 border-black px-10 py-3 uppercase">
          Read more stories
        </button>
      </div>
</>
  );
}