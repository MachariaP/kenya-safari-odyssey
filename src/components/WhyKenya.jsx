import { motion } from 'framer-motion';
import '../styles/whykenya.css'; // Optional for custom animations

export default function WhyKenya() {
  const features = [
    {
      icon: '🦁',
      title: 'The Big Five',
      description:
        'Encounter Kenya’s iconic lion, leopard, elephant, rhino, and buffalo, with lion populations thriving at over 2,500 due to robust anti-poaching efforts.',
      stat: '98% success in anti-poaching',
    },
    {
      icon: '🐘',
      title: 'Elephant Sanctuary',
      description:
        'Discover Amboseli’s 1,800+ elephants, part of Kenya’s 36,000-strong population, protected by community conservancies and a 90% poaching reduction.',
      stat: '36,000+ elephants protected',
    },
    {
      icon: '🦓',
      title: 'Great Migration',
      description:
        'Witness 1.5 million wildebeest and 300,000 zebra in the world’s largest terrestrial migration, crossing the Mara River from July to October.',
      stat: '1.8M animals migrate annually',
    },
  ];

  return (
    <section id="why-kenya" className="py-16 bg-safari-sand/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-safari-green mb-4">
            Why Choose Kenya for Safari?
          </h2>
          <p className="text-lg text-safari-brown leading-relaxed">
            Kenya leads Africa in wildlife conservation, with over 65 national parks and reserves protecting 12% of its land. Pioneering community-based conservation has boosted wildlife populations by 25% since 2015, making Kenya a global model for sustainable ecotourism.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="text-5xl mb-4 text-center feature-icon">{feature.icon}</div>
                <h3 className="text-xl font-bold text-safari-green mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-safari-brown mb-4 text-center">{feature.description}</p>
                <div className="bg-safari-accent/10 border-l-4 border-safari-accent p-3 rounded-r stat-highlight">
                  <p className="text-sm text-safari-brown font-medium">{feature.stat}</p>
                </div>
              </div>
              <div className="bg-safari-green text-white text-center py-2 text-sm conservation-status">
                <span className="inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  KWS Certified Conservation
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}