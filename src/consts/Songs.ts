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


export const ALBUMS: AlbumType[] = [
  {
    title: "Circo Beat",
    artist: "Fito Páez",
    image: "/albums/circo-beat.jpg",
  },
  {
    title: "Oktubre",
    artist: "Patricio Rey y sus Redonditos de Ricota",
    image: "/albums/oktubre.jpg"
  },
  {
    title: "Canción Animal",
    artist: "Soda Stereo",
    image: "/albums/cancion-animal.jpg"
  },
  {
    title: "Un Mañana",
    artist: "Luis Alberto Spinetta",
    image: "/albums/un-manana.jpg"
  },
  {
    title: "La Era de la Boludez",
    artist: "Divididos",
    image: "/albums/la-era-de-la-boludez.jpg"
  },
  {
    title: "Bocanada",
    artist: "Gustavo Cerati",
    image: "/albums/bocanada.jpg"
  },
  {
    title: "Despedazado por Mil Partes",
    artist: "La Renga",
    image: "/albums/despedazado-por-mil-partes.jpg"
  },
  {
    title: "Artaud",
    artist: "Pescado Rabioso",
    image: "/albums/artaud.jpg"
  },
  {
    title: "La Grasa de las Capitales",
    artist: "Serú Girán",
    image: "/albums/la-grasa-de-las-capitales.jpg"
  },
]