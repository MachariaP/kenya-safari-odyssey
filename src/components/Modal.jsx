export default function Modal({ isOpen, content, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-safari-brown hover:text-safari-accent text-xl font-bold"
        >
          ✕
        </button>
        <img src={content.image} alt={content.name} className="w-full h-64 object-cover rounded-t-xl" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-safari-green">{content.name}</h2>
          <p className="mt-4 text-safari-brown">{content.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="font-semibold text-safari-green">Location</h3>
              <p>{content.location}</p>
            </div>
            <div>
              <h3 className="font-semibold text-safari-green">Size</h3>
              <p>{content.size}</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-safari-green">Key Wildlife</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {content.animals.map((animal) => (
                <span
                  key={animal}
                  className="bg-safari-accent/20 text-safari-brown px-3 py-1 rounded-full text-sm"
                >
                  {animal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
