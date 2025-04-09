'use client';
import { useEffect, useState } from 'react';
import Navbar from "@/components/navbar";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { SongCard } from "@/components/song-card";
import { NowPlaying } from "@/components/now-playing";
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

// Simplified interfaces
interface SpotifyTrack {
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
}

interface SpotifyData {
  topTracks: SpotifyTrack[];
  nowPlaying: SpotifyTrack | null;
}

// Simplified fetch function
async function fetchSpotify(): Promise<SpotifyData | null> {
  try {
    const { access_token } = await fetch('/api/spotify', {
      cache: 'no-store'
    }).then(res => res.json());

    if (!access_token) throw new Error('No access token received');

    const headers = { Authorization: `Bearer ${access_token}` };

    const [nowPlayingRes, tracksRes] = await Promise.all([
      fetch('https://api.spotify.com/v1/me/player/currently-playing', { headers }),
      fetch('https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term', { headers })
    ]);

    const nowPlaying = nowPlayingRes.status === 200 ? (await nowPlayingRes.json()).item : null;
    const { items: topTracks } = await tracksRes.json();

    return { topTracks, nowPlaying };
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return null;
  }
}

export default function About() {
  const [data, setData] = useState<SpotifyData>({ topTracks: [], nowPlaying: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function getSpotifyData() {
      try {
        const result = await fetchSpotify();
        if (!isMounted) return;

        if (result) {
          setData(prev => ({
            topTracks: result.topTracks || prev.topTracks,
            nowPlaying: result.nowPlaying || prev.nowPlaying
          }));
        }
      } catch (error) {
        console.error('Error updating Spotify data:', error);
      }
    }

    // Initial load
    async function initialLoad() {
      setIsLoading(true);
      await getSpotifyData();
      if (isMounted) setIsLoading(false);
    }

    initialLoad();

    // Set up polling
    const interval = setInterval(async () => {
      await getSpotifyData();
    }, 30000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <Container>
        <main className="flex flex-col gap-6 sm:gap-8 py-24">

          {/* Image Section */}
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-2 text-left">
              <div className="flex gap-4 items-center justify-center mb-8 mt-12 md:mt-4 lg:mt-2">
                <div className="w-1/3 h-[200px] flex items-center justify-center relative overflow-hidden rounded-lg">
                  <img
                    src="/images/banner-profile/panglipuran.jpg"
                    alt="Myself"
                    className="rounded-lg object-cover w-full h-full object-center scale-150"
                  />
                  <span className="absolute bottom-2 ml-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                    It&apos;s me
                  </span>
                </div>
                <div className="w-2/3 h-[200px] flex items-center justify-center relative">
                  <img
                    src="/images/banner-profile/gwkbali.jpeg"
                    alt="header"
                    className="rounded-lg object-cover w-full h-full object-[50%_70%]"
                  />
                  <span className="absolute bottom-2 ml-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                    Garuda Wisnu Kencana, Bali.
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
                Sometimes i watch movie, anime, play games until mad :-D(just kiddin) and listening music or enjoying a good cup of coffee☕. But i prefer to drink hot chocolate🍫.
              </p>
              <div>
                <p>
                  I&apos;m right now student of <a
                    href="https://www.ub.ac.id/id/"
                    target="_blank"
                    className="line-through decoration-red-500 decoration-2 text-black dark:text-white">
                    Brawijaya University
                  </a> i mean <a
                    href="https://www.ub.ac.id/id/"
                    target="_blank"
                    className="underline decoration-red-500 text-black dark:text-white">
                    Telkom University Surabaya
                  </a> majoring in Informatics Engineering (2025-2028). I&apos;m also a member of <a href="#" target="_blank" className="underline decoration-red-500 text-black dark:text-white">Big Company</a> i hope so.
                </p>
              </div>
            </div>
          </section>

          {/* Spotify Section */}
          <section className="my-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              <span className="inline-block hover:underline decoration-2 cursor-pointer">
                What I&apos;m Listening to
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Now Playing Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  Now Playing
                </h2>
                <NowPlaying isLoading={isLoading} nowPlaying={data.nowPlaying} />
              </div>

              {/* Top Tracks Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  Top Picks in past 4 weeks
                </h2>
                {isLoading ? (
                  <div className="space-y-4">
                    {['loading-1', 'loading-2', 'loading-3'].map((key) => (
                      <div key={key} className="animate-pulse h-24 bg-gray-200 dark:bg-zinc-800 rounded-lg" />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {data.topTracks.map((track) => (
                      <SongCard
                        key={track.name}
                        title={track.name}
                        artist={track.artists.map(artist => artist.name).join(', ')}
                        albumArt={track.album.images[0]?.url}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full border-t-2 border-zinc-200 dark:border-zinc-600 my-6" />

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
                <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base md:text-lg">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Email -</span>
                  <a
                    href="mailto:rafimahendra635@gmail.com"
                    className="underline hover:text-primary transition-colors truncate"
                  >
                    rafimahendra635@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base md:text-lg">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Instagram -</span>
                <a
                  href="https://www.instagram.com/ra.mhndra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  instagram.com/ra.mhndra
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base md:text-lg">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Linkedin -</span>
                <a
                  href="https://www.linkedin.com/in/rafi-mahendra-hae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  linkedin.com/in/rafi-mahendra-hae/
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base md:text-lg">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Github -</span>
                <a
                  href="https://github.com/Komodomo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  github.com/Komodomo
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
