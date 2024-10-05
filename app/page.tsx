import Landing from "./landing/page";
export default function Home() {
  return (
    <main className="bg-white">
      
      <div className=" m-0 bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]"> 
        <main className="flex flex-col row-start-2 items-start sm:items-start">
          <Landing />
        </main> 
      </div>
      
    </main>
  );
}
