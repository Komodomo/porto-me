import Image from "next/image";
import Navbar from "@/components/navbar";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import TechCard from "@/components/tech-card";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <Container>
        <main className="flex flex-col gap-12 sm:gap-20 py-20 sm:py-24">
          {/* Hero Section */}
          <section
            id="home"
            className="flex flex-col-reverse md:flex-row items-center justify-between
            py-16 px-4 sm:py-24 sm:px-8 lg:py-32 lg:px-16
            relative bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] 
            bg-[size:42px_42px]
            [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent),linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
            [mask-composite:intersect]"
          >
            <div className="flex-1 space-y-2 text-center mx-auto">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold opacity-80">
                Hello there !
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                I&apos;m Komodomo
              </h1>

              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
                Ordinary Software Student From Surabaya, East Java, Indonesia.
              </p>
              <div className="text-sm sm:text-base">
                <p className="text-zinc-600 dark:text-zinc-400">
                  Self-diagnose as a fullstack developer. who doesn&apos;t want to be a fullstack developer?
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  (he doesn&apos;t even know what he wrote)
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-8 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
              {/* Project Card */}
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 sm:p-6">
                <div className="relative w-full aspect-video">
                  {false ? (
                    <Image
                      src=""
                      alt="Project 1"
                      fill
                      className="rounded-lg object-cover"/>
                  ) : null}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mt-4">Project Name</h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
                  Project description goes here
                </p>
              </div>
            </div>
          </section>

          {/* TechStack Section */}
          <section id="tech" className="space-y-8 px-4 sm:px-0">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold">Tools & Technologies</h2>
              <p className="text-zinc-600 dark:text-zinc-400">Technologies and tools I use to bring ideas to life</p>
            </div>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2">
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" name="HTML" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" name="CSS" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" name="JavaScript" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" name="Tailwind CSS" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" name="Laravel" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" name="PHP" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" name="MySQL" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" name="React" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" name="TypeScript" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" name="NextJS" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" name="Flutter" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" name="Firebase" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" name="Python" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" name="Github" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" name="Figma" />
              <TechCard icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" name="VS Code" />
            </div>
          </section>
        </main>
        <Footer />
      </Container>
    </div>
  );
}
