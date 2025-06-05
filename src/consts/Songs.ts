export type SongsType = {
  title: string;
  artist: string;
  image: string;
  duration: string;
};

export type AlbumType = {
  title: string;
  artist: string;
  image: string;
};

export const SONGS: SongsType[] = [
  {
    title: "Persiana Americana",
    artist: "Soda Stereo",
    image: "/songs/persiana-americana.jpg",
    duration: "4:52",
  },
  {
    title: "Seguir Viviendo Sin Tu Amor",
    artist: "Luis Alberto Spinetta",
    image: "/songs/seguir-viviendo.jpg",
    duration: "4:10",
  },
  {
    title: "Ji Ji Ji",
    artist: "Patricio Rey y sus Redonditos de Ricota",
    image: "/songs/jijiji.jpg",
    duration: "6:06",
  },
  {
    title: "El Amor Después del Amor",
    artist: "Fito Páez",
    image: "/songs/amor-despues.jpg",
    duration: "4:35",
  },
  {
    title: "La Rubia Tarada",
    artist: "Sumo",
    image: "/songs/la-rubia-tarada.jpg",
    duration: "3:45",
  },
  {
    title: "De Música Ligera",
    artist: "Soda Stereo",
    image: "/songs/musica-ligera.jpg",
    duration: "3:32",
  },
  {
    title: "Nena, Me Gustas Así",
    artist: "Viejas Locas",
    image: "/songs/nena-me-gustas.jpg",
    duration: "4:18",
  },
];


export const Albums: AlbumType[] = [
  {
    title: "El Amor Después del Amor",
    artist: "Fito Páez",
    image: "/albums/el-amor-despues-del-amor.jpg",
  },
  {
    title: "Signos",
    artist: "Soda Stereo",
    image: "/albums/signos.jpg",
  },
  {
    title: "La Mosca y la Sopa",
    artist: "Patricio Rey y sus Redonditos de Ricota",
    image: "/albums/la-mosca-y-la-sopa.jpg",
  },
  {
    title: "Oktubre",
    artist: "Patricio Rey y sus Redonditos de Ricota",
    image: "/albums/oktubre.jpg",
  },
  {
    title: "Análisis",
    artist: "Luis Alberto Spinetta",
    image: "/albums/analisis.jpg",
  },
  {
    title: "La Colina de la Vida",
    artist: "Sumo",
    image: "/albums/la-colina-de-la-vida.jpg",
  },
  {
    title: "Mondo Día",
    artist: "Viejas Locas",
    image: "/albums/mondo-dia.jpg",
  },
]