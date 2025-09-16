import { useState } from 'react';
     import { useTranslation } from 'react-i18next';
     import { motion } from 'framer-motion';

     function ProductModal({ product, closeModal }) {
       const { i18n, t } = useTranslation();
       const lang = i18n.language;
       const [selectedColor, setSelectedColor] = useState(product.colors.length > 0 ? product.colors[0].hex : null);
       const [mainImage, setMainImage] = useState(product.image);
       const [referralCode, setReferralCode] = useState('');
       const [error, setError] = useState('');

       // Map hex codes to color names for display
       const colorNames = {
         '#00CED1': { en: 'Teal', fa: 'فیروزه‌ای' },
         '#FF69B4': { en: 'Hot Pink', fa: 'صورتی تند' },
         '#FFD700': { en: 'Gold', fa: 'طلایی' },
         '#FF7F50': { en: 'Coral', fa: 'مرجانی' },
         '#40E0D0': { en: 'Turquoise', fa: 'فیروزه‌ای روشن' },
         '#C0C0C0': { en: 'Silver', fa: 'نقره‌ای' },
         '#800080': { en: 'Purple', fa: 'بنفش' },
         '#FFC1CC': { en: 'Pastel Pink', fa: 'صورتی پاستلی' },
         '#87CEEB': { en: 'Sky Blue', fa: 'آبی آسمانی' }
       };

       const handleColorSelect = (hex) => {
         setSelectedColor(hex);
         const thumbnails = product.thumbnailsByColor[hex] || product.thumbnails;
         setMainImage(thumbnails[0] || product.image);
       };

       const handlePurchaseCall = () => {
         window.location.href = 'tel:+989125574218';
       };

       const handlePurchaseWhatsApp = () => {
         const selectedColorObj = product.colors.find((color) => color.hex === selectedColor);
         const colorName = selectedColorObj
           ? selectedColorObj.transparent
             ? t('TransparentColor')
             : colorNames[selectedColor]?.[lang] || t('SolidColor')
           : t('SolidColor');

         if (referralCode.toUpperCase() === 'GIFT') {
           const message = t('GiftWhatsAppMessage', { title: product.title[lang] });
           window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(message)}`;
         } else {
           const message = t('WhatsAppMessage', {
             title: product.title[lang],
             color: colorName,
             code: referralCode || 'None'
           });
           window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(message)}`;
         }
       };

       const handlePriceInquiryCall = () => {
         window.location.href = 'tel:+989125574218';
       };

       const handlePriceInquiryWhatsApp = () => {
         const message = t('PriceInquiryWhatsAppMessage', { title: product.title[lang], code: referralCode || 'None' });
         window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(message)}`;
       };

       const handleReproductionRequest = () => {
         const message = t('ReproductionRequestMessage', { title: product.title[lang], code: referralCode || 'None' });
         window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(
           t('ReproductionRequestSubject', { title: product.title[lang] })
         )}&body=${encodeURIComponent(message)}`;
       };

       return (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
           <div className="product-modal max-w-lg">
             <button
               onClick={closeModal}
               className="absolute top-2 right-2 text-gray-600 hover:text-ff6b6b"
             >
               ✕
             </button>
             <img
               src={mainImage}
               alt={product.title[lang]}
               className={`w-full h-48 object-cover rounded-md ${!product.inStock ? 'opacity-50' : ''}`}
             />
             <div className="flex flex-col gap-2 mt-2">
               {product.colors.length > 0 && (
                 <div className="flex justify-center gap-2">
                   {product.colors.map((color, index) => (
                     <motion.div
                       key={index}
                       className={`w-8 h-8 rounded-full cursor-pointer hover:border-2 border-ff6b6b ${
                         color.transparent ? 'bg-checkered' : ''
                       } ${selectedColor === color.hex ? 'border-2 border-ff6b6b' : ''}`}
                       style={{ backgroundColor: color.hex }}
                       onClick={() => handleColorSelect(color.hex)}
                       whileHover={{ scale: 1.2 }}
                       transition={{ duration: 0.2 }}
                       title={color.transparent ? t('TransparentColor') : t('SolidColor')}
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
                       className={`w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer hover:border-2 border-ff6b6b ${
                         mainImage === thumb ? 'border-2 border-ff6b6b' : ''
                       }`}
                       onClick={() => setMainImage(thumb)}
                       whileHover={{ scale: 1.2 }}
                       transition={{ duration: 0.2 }}
                     />
                   ))}
                 </div>
               )}
             </div>
             <h2 className="text-2xl font-bold mt-4 text-gray-800">{product.title[lang]}</h2>
             <p className="text-gray-600">{product.description[lang]}</p>
             <p className="text-gray-700 mt-2">{t('Material')}: {product.material[lang]}</p>
             <p className="text-gray-700">{t('Dimensions')}: {product.dimensions[lang]}</p>
             <p className="text-gray-700 font-semibold">
               {t('Price')}: {product.hasFixedPrice ? product.price[lang] : t('PriceInquiryRequired')}
             </p>
             <input
               type="text"
               placeholder={t('ReferralCode')}
               value={referralCode}
               onChange={(e) => setReferralCode(e.target.value)}
               className="border border-gray-300 rounded-md p-2 mt-2 w-full"
             />
             {error && <p className="text-red-600 mt-2">{error}</p>}
             <div className="mt-4 flex gap-2">
               {product.inStock ? (
                 product.hasFixedPrice ? (
                   <>
                     <button onClick={handlePurchaseCall} className="purchase-button">
                       {t('CallToPurchase')}
                     </button>
                     <button onClick={handlePurchaseWhatsApp} className="purchase-button">
                       {t('PurchaseViaWhatsApp')}
                     </button>
                   </>
                 ) : (
                   <>
                     <button onClick={handlePriceInquiryCall} className="purchase-button">
                       {t('InquireAboutPriceCall')}
                     </button>
                     <button onClick={handlePriceInquiryWhatsApp} className="purchase-button">
                       {t('InquireAboutPriceWhatsApp')}
                     </button>
                   </>
                 )
               ) : (
                 <>
                   <button onClick={handleReproductionRequest} className="purchase-button">
                     {t('RequestReproduction')}
                   </button>
                 </>
               )}
             </div>
           </div>
         </div>
       );
     }

     export default ProductModal;