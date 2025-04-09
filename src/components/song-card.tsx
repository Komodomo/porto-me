import { Card, CardContent } from "@/components/ui/card"

interface SongCardProps {
  readonly title: string;
  readonly artist: string;
  readonly albumArt?: string;
  readonly isPlaying?: boolean;
}

export function SongCard({ title, artist, albumArt, isPlaying }: SongCardProps) {
  return (
    <Card className="transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          {albumArt && (
            <img 
              src={albumArt} 
              alt={`${title} album art`}
              className="w-16 h-16 rounded-md object-cover"
            />  
          )}
          <div>
            <h3 className="font-medium text-black dark:text-white">{title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{artist}</p>
          </div>
        </div>
        
        {isPlaying && (
          <div className="flex items-center mr-4 gap-[2px]">
            <span className="w-1 h-3 bg-green-500 rounded-full animate-music-pulse" />
            <span className="w-1 h-5 bg-green-500 rounded-full animate-music-pulse [animation-delay:0.2s]" />
            <span className="w-1 h-3 bg-green-500 rounded-full animate-music-pulse [animation-delay:0.4s]" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}