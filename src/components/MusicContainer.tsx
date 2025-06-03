import type SongsType from "../consts/Songs";

type MusicContainerProps = {
    title: string;
    listOfSongs: SongsType[];
}

function MusicContainer({ title, listOfSongs }: MusicContainerProps) {
  return (
    <li>
      <h2>{title}</h2>
      <ul>
        {listOfSongs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </li>
  )
}

export default MusicContainer