import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className=" m-0 bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
        <main className="flex flex-col row-start-2 items-center sm:items-start">
          <Landing/>
        </main>

        
      </div>
      <Footer />
    </main>
  );
}
