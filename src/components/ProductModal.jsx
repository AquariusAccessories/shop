import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ProductModal({ product, closeModal }) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const [mainImage, setMainImage] = useState(product.image);

  const handlePurchaseCall = () => {
    window.location.href = 'tel:+989125574218';
  };

  const handlePurchaseWhatsApp = () => {
    const message = t('WhatsApp Message', { title: product.title[lang] });
    window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(message)}`;
  };

  const handlePriceInquiryCall = () => {
    window.location.href = 'tel:+989125574218';
  };

  const handlePriceInquiryWhatsApp = () => {
    const message = t('Price Inquiry WhatsApp Message', { title: product.title[lang] });
    window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(message)}`;
  };

  const handleReproductionRequest = () => {
    const message = t('Reproduction Request Message', { title: product.title[lang] });
    window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(
      t('Reproduction Request Subject', { title: product.title[lang] })
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="product-modal">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-ff6b6b"
        >
          ✕
        </button>
        <img 
          src={mainImage}
          alt={product.title[lang]}
          className="w-full h-64 object-cover rounded-md"
        />
        <div className="flex gap-2 mt-2">
          {product.thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt={`${product.title[lang]} Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover rounded-md cursor-pointer hover:opacity-80"
              onClick={() => setMainImage(thumb)}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-4 text-gray-800">{product.title[lang]}</h2>
        <p className="text-gray-600">{product.description[lang]}</p>
        <p className="text-gray-700 mt-2">{t('Material')}: {product.material[lang]}</p>
        <p className="text-gray-700">{t('Dimensions')}: {product.dimensions[lang]}</p>
        <p className="text-gray-700 font-semibold">
          {t('Price')}: {product.hasFixedPrice ? product.price[lang] : t('Price Inquiry Required')}
        </p>
        <div className="mt-4 flex gap-2">
          {product.inStock ? (
            product.hasFixedPrice ? (
              <>
                <button onClick={handlePurchaseCall} className="purchase-button">
                  {t('Call to Purchase')}
                </button>
                <button onClick={handlePurchaseWhatsApp} className="purchase-button">
                  {t('Purchase via WhatsApp')}
                </button>
              </>
            ) : (
              <>
                <button onClick={handlePriceInquiryCall} className="purchase-button">
                  {t('Inquire About Price (Call)')}
                </button>
                <button onClick={handlePriceInquiryWhatsApp} className="purchase-button">
                  {t('Inquire About Price (WhatsApp)')}
                </button>
              </>
            )
          ) : (
            <>
              <button onClick={handleReproductionRequest} className="purchase-button">
                {t('Request Reproduction')}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductModal;