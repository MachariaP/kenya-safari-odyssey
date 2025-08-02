import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover the Heart of Africa: Kenya's Wildlife</h1>
        <p>Explore breathtaking landscapes and encounter the world's most magnificent animals.</p>
        <Link
          to="parks"
          smooth={true}
          duration={800}
          offset={-70}
          className="hero-cta"
          aria-label="Start your adventure by scrolling to the parks section"
        >
          Start Your Adventure
        </Link>
      </div>
      <div className="hero-scroll">
        <Link
          to="parks"
          smooth={true}
          duration={800}
          offset={-70}
          aria-label="Scroll to explore parks"
        >
          <FaChevronDown />
        </Link>
      </div>
    </section>
  );
}