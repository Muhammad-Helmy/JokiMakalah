// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Slider from "@/components/carousel/page";
import Main from "@/components/main/page";
import Navbar from "@/components/navbar/page";


export default function Home() {
  return (
    <div className="bg-white">
      <Navbar/>
      <main>
        <Slider/>
        <Main/>
      </main>
    </div>
  );
}
