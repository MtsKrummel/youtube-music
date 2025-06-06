import { ALBUMS, SONGS } from "../consts/Songs";
import { CarouselSection } from "./CarouselSection";

function Main() {
  return (
    <main 
      className="relative flex min-h-screen w-screen text-white"
    >
      <div className="bg-transparent mr-30"></div>

      {/* Implementar filtros */}

      <section 
        className="relative mt-24 p-8 pl-0 w-full"
      >
        <div className="flex flex-col space-y-8 gap-8 my-8">
          <CarouselSection 
            title={'Escuchar de nuevo'}
            songs={SONGS}
          />
          <CarouselSection title={'Álbunes para ti'} songs={ALBUMS}/>
          <CarouselSection title={'Bad Bunny'} songs={SONGS}/>
        </div>
      </section>

    </main>
  );
}

export default Main;
