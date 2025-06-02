import { SONGS } from "../consts/Songs";
import MusicCard from "./MusicCard";

function Main() {
  return (
    <main className="relative flex h-screen w-screen text-white">
      <div className="bg-transparent mr-30"></div>
      <section className="relative border-2 mt-24 p-8 pl-0 w-full">
        <div className="p-4">
          <h1 className="text-4xl font-bold">
            Mixes para ti
          </h1>

          <div className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {
              SONGS.map(({title, artist, image}) => (
                <MusicCard 
                  key={title} 
                  title={title} 
                  artist={artist} 
                  image={image} 
                />
              ))
            }
          </div>
        </div>
      </section>

    </main>
  );
}

export default Main;
