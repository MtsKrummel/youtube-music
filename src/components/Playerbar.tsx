import { Play } from "lucide-react"

function PlayerBar() {
  return (
    <section className="fixed bottom-0 left-0 w-full h-16 bg-black/50 backdrop-blur-lg flex items-center justify-between px-4 text-white z-50">
      <Play />
      Player Bar
    </section>
  )
}

export default PlayerBar