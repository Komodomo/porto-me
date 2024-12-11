import Image from "next/image";
import Navbar from "@/components/navbar";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen pt-20">
        <Navbar />
        <Container>
        <main className="flex flex-col gap-20 py-20">
          {/* Hero Section */}
          <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Your Name</h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">Frontend Developer</p>
              <p className="text-zinc-600 dark:text-zinc-400">I build accessible, inclusive products and digital experiences for the web.</p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full"
                priority
              />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Card */}
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
                <Image
                  src="/project1.jpg"
                  alt="Project 1"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4">Project Name</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">Project description goes here</p>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="techstack" className="space-y-8">
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Tech Stack Item */}
              <div className="flex items-center gap-2 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                <Image
                  src="/tech-icon.svg"
                  alt="Tech"
                  width={24}
                  height={24}
                />
                <span>Technology</span>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-8">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              I'm currently open for new opportunities. Send me an email at{" "}
              <a href="mailto:your@email.com" className="text-blue-500 hover:underline">
                your@email.com
              </a>
            </p>
          </section>
        </main>
          <Footer />
        </Container>
    </div>
  );
}
