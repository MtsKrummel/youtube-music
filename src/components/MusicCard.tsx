import { Play } from "lucide-react";

function MusicCard({ title, artist, image }) {
  return (
    <div className="group relative w-full max-w-xs rounded-2xl overflow-hidden shadow-lg bg-zinc-900 hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <button className="absolute bottom-5 right-5 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white ">
        <Play className="w-5 h-5" />
      </button>
      <div className="p-4">
        <h3 className="text-white text-base font-semibold">{title}</h3>
        <p className="text-zinc-400 text-sm">{artist}</p>
      </div>
    </div>
  );
}
export default MusicCard;