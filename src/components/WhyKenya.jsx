import { motion } from 'framer-motion';
import '../styles/whykenya.css';

export default function WhyKenya() {
  const features = [
    {
      icon: '🦁',
      title: 'The Big Five',
      description: 'Witness the legendary Lion, Leopard, Elephant, Rhino, and Buffalo in their natural habitats, thriving due to Kenya’s conservation efforts.',
      stat: '98% anti-poaching success',
      color: 'var(--safari-green)',
    },
    {
      icon: '🐘',
      title: 'Elephant Haven',
      description: 'Explore Amboseli’s vast elephant herds, part of Kenya’s 36,000+ protected elephants, safeguarded by community conservancies.',
      stat: '90% poaching reduction',
      color: 'var(--safari-brown)',
    },
    {
      icon: '🦓',
      title: 'Great Migration',
      description: 'Experience 1.5 million wildebeest and 300,000 zebra crossing the Mara River in the world’s largest terrestrial migration.',
      stat: '1.8M animals annually',
      color: 'var(--safari-accent)',
    },
    {
      icon: '🇰🇪',
      title: 'Rich Cultural Heritage',
      description: 'Immerse yourself in the vibrant traditions and hospitality of the Maasai and over 42 indigenous Kenyan communities.',
      stat: '42+ communities',
      color: 'var(--safari-dark)',
    },
    {
      icon: '🌊',
      title: 'Spectacular Coastlines',
      description: 'Relax on Mombasa and Malindi’s pristine beaches, exploring Swahili culture and vibrant coral reefs along 536km of coastline.',
      stat: '536km coastline',
      color: 'var(--safari-blue)',
    },
  ];

  return (
    <section id="why-kenya" className="relative py-16 bg-gradient-to-b from-safari-sand/20 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pattern-safari opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-safari-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-safari-accent mx-auto mb-6"
          ></motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-safari-green mb-4 font-playfair">
            Why Choose Kenya for Your Safari?
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-safari-brown leading-relaxed"
          >
            Kenya is a world leader in conservation, protecting 12% of its land across 65+ parks and reserves. From the savannas of the Great Rift Valley to Mount Kenya’s peaks and the Indian Ocean’s coral reefs, experience unparalleled wildlife and vibrant cultures.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
              className={`relative bg-white rounded-2xl shadow-md overflow-hidden feature-card ${
                index === 4 ? 'sm:col-span-2 lg:col-span-3 lg:max-w-4xl lg:mx-auto' : ''
              }`}
              role="region"
              aria-label={`Feature: ${feature.title}`}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="feature-icon-wrapper mb-5 mx-auto">
                  <motion.span
                    className="feature-icon"
                    animate={{ y: [-10, 0, -10], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {feature.icon}
                  </motion.span>
                  <div
                    className="absolute inset-0 rounded-full opacity-10"
                    style={{ backgroundColor: feature.color }}
                  ></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-3" style={{ color: feature.color }}>
                  {feature.title}
                </h3>
                <p className="text-safari-brown text-center mb-4 flex-grow">{feature.description}</p>
                <motion.div
                  className="stat-badge mx-auto"
                  style={{ backgroundColor: `${feature.color}15`, borderLeft: `4px solid ${feature.color}` }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm font-medium" style={{ color: feature.color }}>
                    {feature.stat}
                  </p>
                </motion.div>
              </div>
              <div
                className="conservation-ribbon"
                style={{ backgroundColor: feature.color }}
                aria-label="Kenya Wildlife Service Certified"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>KWS Certified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Eco Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-safari-green/20 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {['Global Sustainable Tourism', 'EarthCheck Certified', 'African Conservation', 'Eco Warrior Award', 'Green Safari Initiative'].map(
            (org, i) => (
              <motion.div
                key={i}
                className="eco-badge flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-safari-green/10"
                whileHover={{ y: -4, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)' }}
                transition={{ duration: 0.3 }}
                role="img"
                aria-label={`Certified by ${org}`}
              >
                <span className="w-2 h-2 rounded-full bg-safari-green mr-2"></span>
                <span className="text-safari-brown text-sm font-medium">{org}</span>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}