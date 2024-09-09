import Hero from './components/Hero';
import Shows from './components/Shows';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col items-center">
        <Hero />
        <Shows />
      </main>
    </div>
  );
}
