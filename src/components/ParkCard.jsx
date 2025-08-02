export default function ParkCard({ park, onClick }) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] cursor-pointer"
      onClick={() => onClick(park)}
    >
      <img src={park.image} alt={park.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-safari-green">{park.name}</h3>
        <p className="text-safari-brown mt-2 line-clamp-2">{park.description}</p>
      </div>
    </div>
  );
}
