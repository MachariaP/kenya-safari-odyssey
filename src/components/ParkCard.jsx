import { motion } from 'framer-motion';
import SafariImage from './SafariImage';

export default function ParkCard({ park, onClick, className }) {
  const getConservationColor = (status) => {
    if (status.includes('Thriving') || status.includes('Growing')) return 'bg-green-600';
    if (status.includes('Stable')) return 'bg-blue-600';
    return 'bg-yellow-600';
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${park.name}`}
    >
      <SafariImage
        src={park.image}
        alt={`${park.name} landscape`}
        containerClass="rounded-b-none group-hover:shadow-2xl"
      />
      <div className="p-6 relative">
        <div className={`absolute top-4 right-4 ${getConservationColor(park.conservationStatus)} text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md conservation-badge`}>
          {park.conservationStatus.split(',')[0]}
        </div>
        <h3 className="text-xl font-bold text-safari-green mb-2 line-clamp-1">{park.name}</h3>
        <p className="text-safari-brown text-sm leading-relaxed line-clamp-2 mb-3">{park.description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-safari-sand/50 text-safari-brown text-xs px-2 py-1 rounded-full">{park.size}</span>
          <span className="bg-safari-sand/50 text-safari-brown text-xs px-2 py-1 rounded-full">{park.location.split(',')[0]}</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-safari-green/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white font-semibold text-lg">Explore Now</span>
      </div>
    </motion.div>
  );
}