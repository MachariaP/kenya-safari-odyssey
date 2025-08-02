import { Link } from 'react-scroll'; // Added import

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-[70vh] md:h-[80vh] bg-[url('/images/hero-bg.jpg')] bg-cover bg-center flex items-center z-10"
      style={{ backgroundImage: `url('/images/hero-bg.jpg')` }} // Fallback for Tailwind
    >
      <div className="container mx-auto px-4">
        <div className="bg-black/50 p-8 rounded-xl max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Kenya's Wildlife</h1>
          <p className="text-lg">Embark on a journey through Kenya's iconic national parks.</p>
          <Link
            to="parks"
            smooth={true}
            duration={500}
            className="mt-4 inline-block bg-safari-accent text-safari-brown py-2 px-4 rounded hover:bg-safari-green hover:text-white transition-colors"
          >
            Explore Parks
          </Link>
        </div>
      </div>
    </section>
  );
}