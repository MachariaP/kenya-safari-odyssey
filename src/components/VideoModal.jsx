import { motion } from 'framer-motion';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="video-modal"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="video-content"
      >
        <button
          className="video-close"
          onClick={onClose}
          aria-label="Close video modal"
        >
          &times;
        </button>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/3eE8u5gVnH0?autoplay=1&mute=1"
          title="Kenya Wildlife Experience"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.div>
  );
}