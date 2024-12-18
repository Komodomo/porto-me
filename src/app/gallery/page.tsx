import Image from "next/image";
import Navbar from "@/components/navbar";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export default function Gallery() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <Container>
        <main className="flex flex-col gap-12 sm:gap-20 py-8 sm:py-20">
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 sm:px-0">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Gallery</h1>
            </div>
          </section>
        </main>
        <Footer />
      </Container>
    </div>
  );
}
