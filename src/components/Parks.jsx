import { motion } from 'framer-motion';
import parks from '../data/parks';
import ParkCard from './ParkCard';
import Modal from './Modal';
import useModal from '../hooks/useModal';
import '../styles/parks.css';

export default function Parks() {
  const { isOpen, modalContent, openModal, closeModal } = useModal();

  return (
    <section id="parks" className="py-20 bg-gradient-to-b from-safari-sand/10 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-safari-green mb-4">Kenya’s Wildlife Sanctuaries</h2>
          <p className="text-lg text-safari-brown leading-relaxed">
            Discover Kenya’s protected areas, where world-class conservation meets unforgettable safari adventures.
          </p>
          <div className="mt-6 h-1 w-32 bg-safari-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['All', 'Big Five', 'Elephants', 'Migration', 'Birding', 'Forest'].map((filter, i) => (
            <button
              key={i}
              className="px-4 py-2 bg-white border border-safari-green/30 text-safari-green hover:bg-safari-green hover:text-white rounded-full text-sm font-medium transition-all duration-300"
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {parks.map((park, index) => (
            <motion.div
              key={park.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ParkCard park={park} onClick={() => openModal(park)} className="park-card" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-safari-green/95 text-white rounded-2xl p-8 shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">65+</div>
              <div className="text-sm">Protected Areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">12%</div>
              <div className="text-sm">Land Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">35%</div>
              <div className="text-sm">Revenue to Conservation</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25%</div>
              <div className="text-sm">Wildlife Growth</div>
            </div>
          </div>
        </motion.div>

        {isOpen && <Modal isOpen={isOpen} content={modalContent} onClose={closeModal} />}
      </div>
    </section>
  );
}