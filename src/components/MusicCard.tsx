// components/MusicCard.tsx
import { Play } from "lucide-react";

type Props = {
  title: string;
  artist: string;
  image: string;
  duration: string;
};

function MusicCard({ title, artist, image, duration }: Props) {
  return (
    <div className="group w-60 flex-shrink-0 bg-zinc-900 rounded-xl">
      <div className="relative aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white">
            <Play className="w-5 h-5" />
          </div>
        </button>
      </div>
      <div className="p-2 text-sm space-y-1">
        <h3 className="text-white font-semibold truncate">{title}</h3>
        <p className="text-zinc-400 truncate">{artist}</p>
        <p className="text-zinc-500 text-xs">{duration}</p>
      </div>
    </div>
  );
}
export default MusicCard;