import parks from '../data/parks';
import ParkCard from './ParkCard';
import Modal from './Modal';
import useModal from '../hooks/useModal';

export default function Parks() {
  const { isOpen, modalContent, openModal, closeModal } = useModal();

  return (
    <section id="parks" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-safari-green mb-8 text-center">Explore Our National Parks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parks.map((park) => (
            <ParkCard key={park.id} park={park} onClick={() => openModal(park)} />
          ))}
        </div>
        {isOpen && <Modal isOpen={isOpen} content={modalContent} onClose={closeModal} />}
      </div>
    </section>
  );
}
