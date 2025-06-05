import { Play } from "lucide-react";

type Props = {
  title: string;
  artist: string;
  image: string;
  duration: string;
};

export function MusicCard({ title, artist, image, duration }: Props) {
  return (
    <div className="group w-40 rounded-lg overflow-hidden shadow bg-zinc-900 ">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
        />
        <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white">
            <Play className="w-5 h-5" />
          </div>
        </button>
      </div>
      <div className="p-2 text-sm">
        <h3 className="text-white font-semibold truncate">{title}</h3>
        <p className="text-zinc-400">{artist}</p>
        <p className="text-zinc-500 text-xs">{duration}</p>
      </div>
    </div>
  );
}
export default MusicCard;