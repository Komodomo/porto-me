import Image from "next/image";
import Navbar from "@/components/navbar";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <Container>
        <main className="flex flex-col gap-12 sm:gap-20 py-8 sm:py-20">
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
            <div className="flex-1 space-y-2 text-center mx-auto ">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold opacity-80">
                Hello there !
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                I&apos;m Komodomo
              </h1>

              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
                Ordinary Software Student
              </p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                From Surabaya, East Java, Indonesia.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                Self-diagnose as a fullstack developer. who doesn&apos;t want to be a fullstack developer?
                (he doesn&apos;t even know what he wrote)
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-8 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
              {/* Project Card */}
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 sm:p-6">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/project1.jpg"
                    alt="Project 1"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mt-4">Project Name</h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
                  Project description goes here
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Container>
    </div>
  );
}
