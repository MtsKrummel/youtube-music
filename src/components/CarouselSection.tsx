import { ChevronLeft, ChevronRight } from "lucide-react";

import ListOfSongs from "./ListOfSongs";
import type { SongsType, AlbumType } from "../consts/Songs";

type CarouselProps = {
  title: string;
  songs: SongsType[] | AlbumType[];
  artist?: string;
};

export function CarouselSection({ title, songs, artist }: CarouselProps) {
  return (
    <section className="flex flex-col md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1500px] mx-auto p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-2 w-full">
        {
          artist && (
            <img className="flex w-20 h-20 object-cover rounded-full" src={`artist/bad-bunny/${artist}.jpg`} alt="artist" width={24} height={24}/>
          )
        }
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-2 lg:w-[100px]">
          <button className="bg-zinc-600 hover:bg-zinc-700 p-2 rounded-full text-white">
            <ChevronLeft />
          </button>
          <button className="bg-zinc-600 hover:bg-zinc-700 p-2 rounded-full text-white">
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <ListOfSongs songs={songs} artist={artist}/>
      </div>
    </section>
  );
}