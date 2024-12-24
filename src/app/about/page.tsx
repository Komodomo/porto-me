// import Image from "next/image";
import Navbar from "@/components/navbar";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { SongCard } from "@/components/song-card";
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <Container>
        <main className="flex flex-col gap-6 sm:gap-8 py-8 sm:py-20">

          {/* Image Section */}
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-2 text-left">
              <div className="flex gap-4 items-center justify-center mb-8 mt-12 md:mt-4 lg:mt-2">
                <div className="w-1/3 h-[200px] flex items-center justify-center relative">
                  <img
                    src="https://i.pinimg.com/736x/76/62/54/76625494ac72bc481ce598f0eb31f1ea.jpg"
                    alt="Anime character 1"
                    className="rounded-lg object-cover w-full h-full object-center"
                  />
                  <span className="absolute bottom-2 ml-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                    It&apos;s me
                  </span>
                </div>
                <div className="w-2/3 h-[200px] flex items-center justify-center relative">
                  <img
                    src="https://i.pinimg.com/736x/40/4d/a7/404da737fbb22ddfad2f972a6665b99e.jpg"
                    alt="Anime character 2"
                    className="rounded-lg object-cover w-full h-full object-center"
                  />
                  <span className="absolute bottom-2 ml-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                    Lake Ranu Kumbolo. Bromo Tengger Semeru National Park, East Java.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="inline-block hover:underline decoration-2 cursor-pointer">
                  About
                </span>
              </h1>
              <p className="text-md sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
                Get to Know Me
              </p>
            </div>

            <div className="w-full md:w-2/3 sm:text-lg text-zinc-600 dark:text-zinc-400 space-y-4 text-justify">
              <p>
                Hello! My name is <span className="font-bold text-black dark:text-white">Rafi Mahendra.</span> I&apos;m graduated from <a href="https://www.smktelkom-bjb.sch.id/web/" target="_blank" className="underline decoration-red-500 text-black dark:text-white">Telkom Banjarbaru Vocational High School</a> majoring in Software Engineering (2025).
                Currently exploring the vast world of software development while pursuing my education.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring some technologies and nature.
                Sometimes i watch movie, anime, play games until mad :-D(it&apos;s not me) and listening music or enjoying a good cup of coffee☕
              </p>
              <p>
                I&apos;m right now student of <a href="https://www.its.ac.id/" target="_blank" className="underline decoration-red-500 text-black dark:text-white">Telkom University Surabaya</a> majoring in Informatics Engineering (2028).
                I&apos;m also a member of <a href="https://www.dicoding.com/" target="_blank" className="underline decoration-red-500 text-black dark:text-white">Dicoding</a> and <a href="https://www.freecodecamp.org/" target="_blank" className="underline decoration-red-500 text-black dark:text-white">freeCodeCamp</a> community.
              </p>
            </div>
          </section>

          {/* Spotify Section */}
          <section className="my-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="inline-block hover:underline decoration-2 cursor-pointer">
                Playlist
              </span>
            </h1>
            <div className="mt-12">
              <p>Currently listening to:</p>
              <div className="mt-2 bg-zinc-900 rounded-lg max-w-sm hover:bg-zinc-800 transition-all">
                <SongCard title="Song Title" artist="Artist Name" />
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="space-y-6">
            <div className="">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="inline-block hover:underline decoration-2 cursor-pointer">
                  Let&apos;s Connect
                </span>
              </h1>
              <p className="text-md sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
                Find me on these platforms
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base md:text-lg">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Email -</span>
                <a
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors truncate"
                >
                  linkedin.com/in/your-username
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base md:text-lg">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Instagram -</span>
                <a
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  linkedin.com/in/your-username
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base md:text-lg">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Linkedin -</span>
                <a
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  linkedin.com/in/your-username
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base md:text-lg">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Github -</span>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  github.com/your-username
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Container>
    </div>
  );
}
