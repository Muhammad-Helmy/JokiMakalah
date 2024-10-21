// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Slider from "@/components/carousel/page";
import Footer from "@/components/footer/page";
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
      <Footer/>
    </div>
  );
}
