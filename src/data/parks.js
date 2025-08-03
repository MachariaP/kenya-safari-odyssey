const parks = [
  {
    id: 1,
    name: "Maasai Mara National Reserve",
    description:
      "Famous for the Great Migration, where 1.5 million wildebeest and 300,000 zebra cross the Mara River between July and October, Maasai Mara is a biodiversity hotspot hosting the Big Five and vibrant Maasai culture.",
    image: "/images/maasai-mara.jpg",
    location: "Southwestern Kenya, Narok County",
    size: "1,510 sq km",
    animals: ["Lion", "Leopard", "Elephant", "Rhino", "Buffalo", "Cheetah", "Wildebeest", "Zebra"],
    conservationStatus: "Stable, with 35% of tourism revenue funding community conservancies",
  },
  {
    id: 2,
    name: "Amboseli National Park",
    description:
      "Renowned for its 1,800+ elephant population and breathtaking views of Mount Kilimanjaro, Amboseli offers prime game viewing and supports a 90% reduction in poaching since 2013.",
    image: "/images/amboseli.jpg",
    location: "Southern Kenya, Kajiado County",
    size: "392 sq km",
    animals: ["Elephant", "Giraffe", "Cheetah", "Hyena", "Lion", "Zebra"],
    conservationStatus: "Thriving, with community-led anti-poaching initiatives",
  },
  {
    id: 3,
    name: "Nairobi National Park",
    description:
      "The world’s only national park within a capital city, located just 7 km from Nairobi’s CBD, it hosts four of the Big Five and over 400 bird species, making it a unique urban safari destination.",
    image: "/images/nairobi-national-park.jpg",
    location: "Nairobi County",
    size: "117 sq km",
    animals: ["Lion", "Leopard", "Rhino", "Buffalo", "Giraffe", "Zebra", "Hyena"],
    conservationStatus: "Under pressure from urban encroachment, supported by KWS and tourism revenue",
  },
  {
    id: 4,
    name: "Tsavo East National Park",
    description:
      "One of Kenya’s largest parks, famous for its ‘red elephants’ dusted with iron-rich soil and vast savanna landscapes, Tsavo East offers diverse wildlife and scenic river systems like the Galana River.",
    image: "/images/tsavo-east.jpg",
    location: "Eastern Kenya, Taita-Taveta County",
    size: "13,747 sq km",
    animals: ["Elephant", "Lion", "Leopard", "Cheetah", "Buffalo", "Giraffe", "Hippo"],
    conservationStatus: "Stable, with ongoing anti-poaching patrols",
  },
  {
    id: 5,
    name: "Samburu National Reserve",
    description:
      "A remote gem along the Ewaso Ng’iro River, Samburu is home to unique species like Grevy’s zebra and reticulated giraffe, offering a less crowded safari with stunning arid landscapes.",
    image: "/images/samburu.jpg",
    location: "Northern Kenya, Samburu County",
    size: "165 sq km",
    animals: ["Grevy’s Zebra", "Reticulated Giraffe", "Somali Ostrich", "Beisa Oryx", "Elephant", "Leopard"],
    conservationStatus: "Growing, with community conservancies reducing human-wildlife conflict",
  },
  {
    id: 6,
    name: "Lake Nakuru National Park",
    description:
      "Nestled in the Great Rift Valley, Lake Nakuru is famed for its flamingo flocks, white rhinos, and diverse birdlife, with over 450 species recorded, offering vibrant wetland and woodland ecosystems.",
    image: "/images/lake-nakuru.jpg",
    location: "Central Kenya, Nakuru County",
    size: "188 sq km",
    animals: ["White Rhino", "Flamingo", "Leopard", "Buffalo", "Giraffe", "Zebra"],
    conservationStatus: "Thriving, with rhino population up 12% since 2015",
  },
  {
    id: 7,
    name: "Aberdare National Park",
    description:
      "A lush, mountainous sanctuary in the Central Highlands, Aberdare features dense forests, waterfalls, and rare species like the bongo antelope, with historical significance as the site of Treetops Hotel.",
    image: "/images/aberdare.jpg",
    location: "Central Kenya, Nyeri County",
    size: "767 sq km",
    animals: ["Bongo Antelope", "Black Rhino", "Elephant", "Leopard", "Giant Forest Hog"],
    conservationStatus: "Stable, with KWS protecting forest ecosystems",
  },
];

export default parks;