import Image from "next/image";

export default function FormatsSection() {
  return (
    <>
      <div className="bg-gray">
        <h4 className="py-24 text-black text-center text-4xl font-bold">
          Choose from two formats with promised quality
        </h4>
        <div className="flex flex-col sm:flex-row text-black">
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
          <div className="flex flex-col items-center gap-8 border-t-2 border-b border-l-2 border-black p-16">
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
      <div className="bg-black">
        <h4 className="py-24 text-white text-center text-6xl font-bold">
          You make music. We do the rest.
        </h4>
      </div>
    </>
  );
}