import type { SongsType } from "../consts/Songs";


type MusicContainerProps = {
    title: string;
    listOfSongs: SongsType[];
}

function MusicContainer({ listOfSongs }: MusicContainerProps) {
  return (
    <li>
      <ul>
        {listOfSongs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </li>
  )
}

export default MusicContainer