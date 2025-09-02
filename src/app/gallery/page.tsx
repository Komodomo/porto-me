"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Card, CardContent, } from "@/components/ui/card";
import { Pin } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

interface Memory {
  title: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: "Coming Soon",
    issuer: "Stay Tuned",
    date: "2k2?",
    image: "https://i.pinimg.com/736x/0b/4a/b3/0b4ab3aa361415906b33be358ea45bcb.jpg"
  }
];

const memories: Memory[] = [
  {
    title: "BBQ - Kebun Raya Banua, Banjarbaru",
    date: "August 2024",
    image: "/images/memo/kebunraya.jpg",
  },
];

function getRandomSize(index: number) {
  // Ensure first three items have different aspect ratios
  if (index < 3) {
    const sizes = ['aspect-square', 'aspect-[4/3]', 'aspect-[3/4]'];
    return sizes[index];
  }

  // For remaining items, use random sizes including more variations
  const sizes = [
    'aspect-square',
    'aspect-[4/3]',
    'aspect-[3/4]',
    'aspect-[16/9]',
    'aspect-[2/3]',
  ];
  return sizes[Math.floor(Math.random() * sizes.length)];
}

export default function Gallery() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <Container>
        <main className="flex flex-col gap-8 sm:gap-10 py-32 sm:py-24">
          {/* Header Section */}
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 sm:px-0">
            <div className="flex-1 space-y-2 text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="inline-block hover:underline decoration-2 cursor-pointer">
                  Gallery
                </span>
              </h1>
              <p className="text-md sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400">Collection of achievements and memories</p>
            </div>
          </section>

          {/* Certificates Section */}
          <section className="space-y-6 px-4 sm:px-0">
            <div className="flex items-center gap-2">
              <Pin className="w-5 h-5 text-zinc-500" />
              <h2 className="text-2xl font-bold">Certificates</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <Card key={index} className="group overflow-hidden">
                  <CardContent className="p-4 space-y-4">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{cert.title}</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Memories Section */}
          <section className="space-y-6 px-4 sm:px-0">
            <h2 className="text-2xl font-bold">Memories</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance] space-y-4">
              {memories.map((memory, index) => (
                <div
                  key={index}
                  className="break-inside-avoid-column group mb-4 cursor-pointer"
                >
                  <div className={`relative ${getRandomSize(index)} w-full overflow-hidden rounded-lg`}>
                    <Image
                      src={memory.image}
                      alt={memory.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium">{memory.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{memory.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </Container>
    </div>
  );
}