import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProductModal from './ProductModal';

function ProductCard({ product }) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors.length > 0 ? product.colors[0].hex : null);
  const [selectedImage, setSelectedImage] = useState(product.image);

  const handleColorSelect = (hex) => {
    setSelectedColor(hex);
    const thumbnails = product.thumbnailsByColor[hex] || product.thumbnails;
    setSelectedImage(thumbnails[0] || product.image);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`product-card relative flex flex-col min-h-[400px] ${!product.inStock ? 'opacity-50' : ''}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-t-md">
          <img
            src={selectedImage}
            alt={product.title[lang]}
            className={`w-full h-full object-cover ${!product.inStock ? 'opacity-50' : ''}`}
          />
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-bold bg-gray-800 bg-opacity-50 px-4 py-2 rounded">
              {t('Sold')}
            </span>
          </div>
        )}
        <div className="flex flex-col items-center gap-2 mt-2">
          {product.colors.length > 0 && (
            <div className="flex justify-center gap-2">
              {product.colors.map((color, index) => (
                <motion.div
                  key={index}
                  className={`w-6 h-6 rounded-full cursor-pointer hover:border-2 border-ff6b6b ${
                    color.transparent ? 'bg-checkered' : ''
                  } ${selectedColor === color.hex ? 'border-2 border-ff6b6b' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  title={color.transparent ? t('Transparent Color') : t('Solid Color')}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleColorSelect(color.hex);
                  }}
                />
              ))}
            </div>
          )}
          {(product.colors.length > 0 ? product.thumbnailsByColor[selectedColor]?.length > 1 : product.thumbnails.length > 1) && (
            <div className="flex justify-center gap-2">
              {(product.colors.length > 0 ? product.thumbnailsByColor[selectedColor] || [] : product.thumbnails).map((thumb, index) => (
                <motion.img
                  key={index}
                  src={thumb}
                  alt={`${product.title[lang]} Thumbnail ${index + 1}`}
                  className={`w-6 h-6 rounded-full cursor-pointer hover:border-2 border-ff6b6b ${
                    selectedImage === thumb ? 'border-2 border-ff6b6b' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(thumb);
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold text-gray-800">{product.title[lang]}</h2>
          <p className="text-gray-600 text-sm flex-grow">{product.description[lang]}</p>
        </div>
      </motion.div>
      {isModalOpen && (
        <ProductModal product={product} closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default ProductCard;