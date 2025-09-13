import { useTranslation } from 'react-i18next';
import { FaPhone, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  const { t } = useTranslation();

  const storeImages = [
    {
      id: 1,
      src: './assets/images/keepsake-box.png',
      alt: t('KeepsakeBox'),
    },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('AboutAquarius')}</h1>
      <p className="text-gray-600 mb-6">{t('AboutDescription')}</p>

      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="chosen-banner mb-6 relative overflow-hidden"
      >
        <div className="sparkle-overlay">
          <span className="sparkle">✨</span>
          <span className="sparkle">🌟</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">{t('WhatSetsUsApart')}</h2>
        <p className="mb-4">{t('WhatSetsUsApartDescription')}</p>
      </motion.section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('OurKeepsakeBoxes')}</h2>
        <p className="text-gray-600 mb-4">{t('KeepsakeBoxDescription')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {storeImages.map((image) => (
            <div key={image.id} className="product-card">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-t-md"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-6 flex gap-4">
        <a href="tel:+989125574218" className="text-gray-700 hover:text-ff6b6b">
          <FaPhone size={24} />
        </a>
        <a
          href="https://www.instagram.com/aquariusaccs/"
          className="text-gray-700 hover:text-ff6b6b"
        >
          <FaInstagram size={24} />
        </a>
        <a href="mailto:info@aquariusaccs.com" className="text-gray-700 hover:text-ff6b6b">
          <FaEnvelope size={24} />
        </a>
      </div>
    </div>
  );
}

export default About;