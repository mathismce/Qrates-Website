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
      <div>
        
      </div>

    </div>
  );
}
