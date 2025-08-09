import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductModal from './ProductModal';

function ProductCard({ product }) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`product-card relative flex flex-col min-h-[300px] ${!product.inStock ? 'opacity-50' : ''}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full flex items-center justify-center overflow-hidden rounded-t-md">
          <img
            src={product.image}
            alt={product.title[lang]}
            className="w-full h-auto object-contain"
          />
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-bold bg-gray-800 bg-opacity-50 px-4 py-2 rounded">
              {t('Sold')}
            </span>
          </div>
        )}
        <div className="p-4 flex flex-col min-h-[100px]">
          <h2 className="text-xl font-semibold text-gray-800">{product.title[lang]}</h2>
          <p className="text-gray-600 text-sm flex-grow">{product.description[lang]}</p>
        </div>
      </div>
      {isModalOpen && (
        <ProductModal product={product} closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default ProductCard;