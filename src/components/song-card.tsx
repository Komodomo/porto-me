import { Card, CardContent } from "@/components/ui/card"

export interface SongCardProps {
  title: string;
  artist: string;
  albumCover?: string;
}

export const SongCard: React.FC<SongCardProps> = ({ 
  title, 
  artist, 
  albumCover = "/placeholder-album.jpg" 
}) => {
  return (
    <Card>
      <CardContent className="flex items-center space-x-4 p-4">
        <div className="w-16 h-16 relative">
          <img
            src={albumCover}
            alt={`${title} Album Cover`}
            className="rounded-md object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all rounded-md" />
        </div>
        <div>
          <p className="font-medium text-white">{title}</p>
          <p className="text-sm text-zinc-400">{artist}</p>
        </div>
      </CardContent>
    </Card>
  )
}