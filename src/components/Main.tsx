import { SONGS } from "../consts/Songs";
import CarouselSection from "./CarouselSection";
import MusicCard from "./MusicCard";

function Main() {
  return (
    <main 
      className="relative flex min-h-screen w-screen text-white"
    >
      <div className="bg-transparent mr-30"></div>
      <section className="relative mt-24 p-8 pl-0 w-full">
        <div className="p-4">
          <CarouselSection title={'Escuchar de nuevo'}/>
          <CarouselSection title={'Mixes para ti'}/>
          <CarouselSection title={'Álbunes para ti'}/>
          <CarouselSection title={'Bad Bunny'}/>
        </div>
      </section>

    </main>
  );
}

export default Main;
