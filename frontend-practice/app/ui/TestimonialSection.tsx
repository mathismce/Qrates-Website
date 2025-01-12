import Image from "next/image";
import { useState, useEffect } from "react";

export default function TestimonialSection() {
  const [activePage, setActivePage] = useState(1);
  const [fade, setFade] = useState(false);

  const testimonials = [
    {
        bg: "bg-yellow",
      quote:
        "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time on vinyl before now.",
      author: " SOL",
      image: "/carroussel1.avif", // Remplacez par votre image
    },
    {
        bg: "bg-orange-500",
      quote:
        "We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.",
      author: "Mason Lieberman (The Real Folk Blues, 2020)",
      image: "/carroussel2.avif", // Remplacez par votre image
    },
  ];

  useEffect(() => {
    if (fade) {
      const timeout = setTimeout(() => setFade(false), 100);
      return () => clearTimeout(timeout);
    }
  }, [fade]);

  const handlePageChange = (index: number) => {
    setFade(true);
    setTimeout(() => setActivePage(index + 1), 500);
  };

  return (
    <div className={`flex h-[900px] border-2 border-black  ${testimonials[activePage - 1].bg}`}>
      {/* Left Section - Text and Navigation */}
      <div className="flex-1 flex flex-col justify-between items-start p-12 py-16 text-black">
        <p className="border-2 text-sm font-medium border-black px-3 py-1 uppercase bg-white">ARTISTS ON QRATES</p>
        <div className={`transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
            <p className="text-2xl font-medium mb-6">"{testimonials[activePage - 1].quote}"</p>
            <p className="font-medium text-xl underline">
            {testimonials[activePage - 1].author} (
            <a
                href="#"
                className="underline hover:text-orange-700"
            >
            </a>
            )
            </p>
        </div>
        

        {/* Pagination */}
        <div className="flex gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activePage === index + 1
                  ? "bg-black text-white"
                  : ` text-black border border-black ${testimonials[activePage - 1].bg}`
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 flex items-center justify-center p-10">
        <Image
          src={testimonials[activePage - 1].image}
          alt="Testimonial"
          width={500}
          height={400}
          className="object-cover h-[800px] w-[620px] border-2 border-black "
        />
      </div>
    </div>
  );
}
