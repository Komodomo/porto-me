import { SongCard } from "./song-card";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";

interface NowPlayingProps {
  isLoading: boolean;
  nowPlaying?: {
    name: string;
    artists?: { name: string }[];
    album?: { images?: { url: string }[] };
  } | null;
}

export function NowPlaying({ isLoading, nowPlaying }: Readonly<NowPlayingProps>) {
  if (isLoading) {
    return <div className="animate-pulse h-24 bg-gray-200 dark:bg-zinc-800 rounded-lg" />;
  }

  if (!nowPlaying?.name) {
    return (
      <div className="h-24 p-4 flex items-center space-x-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
        <div className="flex-shrink-0 w-16 h-16 bg-zinc-200 dark:bg-zinc-700 rounded flex items-center justify-center">
          <MusicalNoteIcon className="w-8 h-8 text-zinc-500 dark:text-zinc-400" />
        </div>
        <p className="text-zinc-600 dark:text-zinc-400">
          Not currently playing anything
        </p>
      </div>
    );
  }

  return (
    <SongCard
      title={nowPlaying.name}
      artist={nowPlaying.artists?.map(artist => artist.name).join(', ') ?? 'Unknown Artist'}
      albumArt={nowPlaying.album?.images?.[0]?.url}
      isPlaying={true}
    />
  );
}