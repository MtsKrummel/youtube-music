// components/ListOfSongs.tsx
import type { SongsType, AlbumType } from "../consts/Songs";
import MusicCard from "./MusicCard";

type Props = {
  songs: SongsType[] | AlbumType[];
};

export function ListOfSongs({ songs }: Props) {
  return (
    <div className="flex gap-4 overflow-x-auto py-4 px-1 overflow-hidden">
      {songs.map((song, index) => (
        <MusicCard
          key={index}
          title={song.title}
          artist={song.artist}
          image={song.image}
          duration={song.duration}
        />
      ))}
    </div>
  );
}
export default ListOfSongs;