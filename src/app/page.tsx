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
          <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 sm:px-0">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Hi, I'm Your Name</h1>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">Frontend Developer</p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-prose">
                I build accessible, inclusive products and digital experiences for the web.
              </p>
            </div>
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 relative">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
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
