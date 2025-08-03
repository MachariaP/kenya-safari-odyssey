import SafariImage from './SafariImage';

export default function Modal({ isOpen, content, onClose }) {
  if (!isOpen) return null;

  const getConservationColor = (status) => {
    if (status.includes('Thriving') || status.includes('Growing')) return 'bg-green-600';
    if (status.includes('Stable')) return 'bg-blue-600';
    return 'bg-yellow-600';
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 modal-overlay">
      <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-content">
        <div className="sticky top-0 bg-white z-10 p-6 border-b border-safari-green/20 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-safari-green">{content.name}</h2>
          <button
            onClick={onClose}
            className="text-3xl text-safari-brown hover:text-safari-green transition-colors"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <SafariImage src={content.image} alt={`${content.name} landscape`} ratio="aspect-[16/9]" />
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-safari-green mb-3">Overview</h3>
              <p className="text-safari-brown text-base leading-relaxed mb-6">{content.description}</p>
              <h3 className="text-xl font-semibold text-safari-green mb-3">Conservation Status</h3>
              <div className="flex items-center mb-6">
                <div className={`w-3 h-3 ${getConservationColor(content.conservationStatus)} rounded-full mr-2`}></div>
                <span className="text-safari-brown text-sm">{content.conservationStatus}</span>
              </div>
            </div>
            <div className="bg-safari-sand/20 p-5 rounded-xl">
              <h3 className="text-xl font-semibold text-safari-green mb-3">Park Details</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-safari-green font-medium text-sm">Location</div>
                  <div className="text-safari-brown">{content.location}</div>
                </div>
                <div>
                  <div className="text-safari-green font-medium text-sm">Size</div>
                  <div className="text-safari-brown">{content.size}</div>
                </div>
                <div>
                  <div className="text-safari-green font-medium text-sm">Best Time to Visit</div>
                  <div className="text-safari-brown">Jul–Oct (Dry Season)</div>
                </div>
              </div>
              <h4 className="text-safari-green font-medium mb-2">Key Wildlife</h4>
              <div className="flex flex-wrap gap-2">
                {content.animals.map((animal, index) => (
                  <span
                    key={index}
                    className="bg-white border border-safari-green/20 text-safari-brown px-3 py-1 rounded-full text-sm"
                  >
                    {animal}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-safari-green/20">
            <a
              href="https://www.kws.go.ke/plan-your-visit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-safari-accent hover:bg-safari-accent/80 text-safari-brown font-medium px-6 py-3 rounded-full transition-colors"
            >
              Plan Your Visit
            </a>
            <a
              href="https://www.kws.go.ke/support-conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-safari-green hover:bg-safari-green/80 text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              Support Conservation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}