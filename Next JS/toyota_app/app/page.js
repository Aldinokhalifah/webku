import Navbar from "./components/navbar";
import Card from "./components/card";
import CarouselSwiper from "./components/carouselSwiper";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div className="mb-4"></div>
    <CarouselSwiper></CarouselSwiper>
    <h1 className="text-center py-5 w-full mt-4 text-2xl sm:text-3xl lg:text-4xl text-black uppercase font-semibold flex justify-center gap-2">
      Big Promo
      <span className="text-red-700 font-bold">Toyota</span>
    </h1>
    <Image
      alt="Promosi Toyota"
      width={800}
      height={400}
      src="/images/toyota.jpg"
      className="my-4 mx-auto w-full max-w-[800px] h-auto rounded-lg shadow-xl"
    />
    <h1 className="text-center py-5 w-full mt-4 text-2xl sm:text-3xl lg:text-4xl text-black uppercase font-semibold flex justify-center gap-2">
      Model
      <span className="text-red-700 font-bold">Toyota</span>
    </h1>
    <Card></Card>
    </>
  );
}
