import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TechCardProps {
  readonly icon: string;
  readonly name: string;
}

export default function TechCard({ icon, name }: TechCardProps) {
  const shouldInvert = name === "Github" || name === "NextJS";

  return (
    <Card className="rounded-lg border hover:bg-accent/50 transition-colors w-fit">
      <CardContent className="py-3 px-4 flex items-center gap-3">
        <div className="relative w-5 h-5">
          <Image
            src={icon}
            alt={name}
            fill
            className={`object-contain ${shouldInvert ? "dark:invert" : ""}`}
          />
        </div>
        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
          {name}
        </span>
      </CardContent>
    </Card>
  );
}