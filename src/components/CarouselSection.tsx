import MusicCard from "./MusicCard"

function CarouselSection({ title }) {
  return (
    <section className="px-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <button className="text-sm text-gray-400 hover:text-gray-200">More</button>
      </div>
      {/* This inner div simulates a horizontal scrolling row of cards */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {/* Example Card (repeat as many as you need in real data‐map) */}
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="flex-none w-40 bg-gray-700 rounded-lg overflow-hidden"
          >
            <MusicCard title={} artist={} duration={} image={}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CarouselSection