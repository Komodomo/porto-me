// import Image from "next/image";
import Navbar from "@/components/navbar";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <Container>
        <main className="flex flex-col gap-12 sm:gap-20 py-8 sm:py-20">
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 sm:px-0">
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Get to Know Me</h1>
            </div>
          </section>
        </main>
        <Footer />
      </Container>
    </div>
  );
}
