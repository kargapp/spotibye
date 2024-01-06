import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const playlists = [
  {
    id: 1,
    name: "Liked Songs",
    image: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
  },
  {
    id: 2,
    name: "60'S K!D",
    image: "https://i.scdn.co/image/ab67706c0000da844b987317b991313888b380ac",
  },
  {
    id: 3,
    name: "90'S K!D",
    image: "https://i.scdn.co/image/ab67706c0000da845e42e3c5fead6e5f2a384aca",
  },
  {
    id: 4,
    name: "Liked Songs",
    image: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
  },
  {
    id: 5,
    name: "60'S K!D",
    image: "https://i.scdn.co/image/ab67706c0000da844b987317b991313888b380ac",
  },
  {
    id: 6,
    name: "90'S K!D",
    image: "https://i.scdn.co/image/ab67706c0000da845e42e3c5fead6e5f2a384aca",
  },
  {
    id: 7,
    name: "Liked Songs",
    image: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
  },
  {
    id: 8,
    name: "60'S K!D",
    image: "https://i.scdn.co/image/ab67706c0000da844b987317b991313888b380ac",
  },
  {
    id: 9,
    name: "90'S K!D",
    image: "https://i.scdn.co/image/ab67706c0000da845e42e3c5fead6e5f2a384aca",
  },
  {
    id: 10,
    name: "Liked Songs",
    image: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
  },
  {
    id: 11,
    name: "60'S K!D",
    image: "https://i.scdn.co/image/ab67706c0000da844b987317b991313888b380ac",
  },
  {
    id: 12,
    name: "90'S K!D",
    image: "https://i.scdn.co/image/ab67706c0000da845e42e3c5fead6e5f2a384aca",
  },
];

const PlaylistCard = () => {
  return (
    <>
      {playlists.map((playlist) => (
        <>
          <div key={playlist.id} className="mx-3 flex items-center gap-3">
            <Image
              src={playlist.image}
              alt="playlist cover"
              width={50}
              height={50}
            />
            <div>
              <h3>{playlist.name}</h3>
              <div className="text-xs">Playlist · KG</div>
            </div>
          </div>
          <Separator className="my-3" />
        </>
      ))}
    </>
  );
};

export default PlaylistCard;
