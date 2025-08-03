import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChevronDown, FaPlay } from 'react-icons/fa';
import SafariImage from './SafariImage';
import VideoModal from './VideoModal';
import '../styles/Hero.css';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = document.getElementById('hero').offsetHeight;
      setScrollProgress(Math.min(scrollY / (heroHeight * 0.5), 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="hero-section" style={{ '--scroll-progress': scrollProgress }}>
      {/* Video Modal */}
      <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />

      {/* Parallax Layers */}
      <div className="parallax-layer background-layer">
        <SafariImage
          src="/images/hero-bg.jpg"
          alt="Kenyan savanna at sunrise with wildlife"
          ratio="aspect-[16/9]"
          containerClass="absolute inset-0"
          overlay={true}
          loading="eager"
        />
      </div>
      <div className="parallax-layer midground-layer">
        <div className="savanna-silhouette"></div>
      </div>
      <div className="parallax-layer foreground-layer">
        <div className="floating-wildlife">
          <div className="elephant"></div>
          <div className="giraffe"></div>
          <div className="birds"></div>
        </div>
      </div>

      {/* Content */}
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="section-label">
            <div className="line"></div>
            <span>Wildlife Sanctuary</span>
          </div>
          <motion.h1
            className="main-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="line">Discover the</span>
            <span className="line accent">Heart of Africa</span>
          </motion.h1>
          <motion.p
            className="subheadline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Kenya’s majestic wildlife in breathtaking natural habitats
          </motion.p>
          <motion.div
            className="cta-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link
              to="parks"
              smooth={true}
              duration={800}
              offset={-70}
              className="hero-cta primary"
              aria-label="Start your adventure by scrolling to the parks section"
            >
              <span>Start Your Adventure</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <button
              className="hero-cta secondary"
              onClick={() => setShowVideo(true)}
              aria-label="Watch a video about Kenya’s wildlife"
            >
              <FaPlay className="play-icon" />
              <span>Wildlife Journey</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="progress-bar">
          <div className="progress-fill" style={{ transform: `scaleY(${scrollProgress})` }}></div>
        </div>
        <Link
          to="parks"
          smooth={true}
          duration={800}
          offset={-70}
          aria-label="Scroll to explore parks"
        >
          <FaChevronDown className="scroll-icon" />
        </Link>
      </div>
    </section>
  );
}