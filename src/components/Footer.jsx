export default function Gallery() {
  const images = [
    '/images/wildlife1.jpg',
    '/images/wildlife2.jpg',
    '/images/wildlife3.jpg',
    // Add more images
  ];

  return (
    <section id="gallery" className="py-16 bg-safari-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-safari-green mb-8 text-center">Wildlife Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Wildlife ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
