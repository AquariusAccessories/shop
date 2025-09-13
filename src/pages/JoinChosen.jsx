import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function JoinChosen() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [qrCode, setQrCode] = useState('');
  const [error, setError] = useState('');

  const handleQRSubmit = (e) => {
    e.preventDefault();
    // Basic validation (in real app, validate against backend or predefined list)
    if (qrCode.trim() && qrCode.length >= 3) {
      navigate(`/chosen-welcome?user=${encodeURIComponent(qrCode)}`);
    } else {
      setError(t('InvalidQRCode'));
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('JoinChosen')}</h1>
      <p className="text-gray-600 mb-6">{t('JoinChosenDescription')}</p>

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
        <h2 className="text-2xl font-bold mb-2">{t('EnterQRCode')}</h2>
        <p className="mb-4">{t('JoinChosenDescription')}</p>
        <form onSubmit={handleQRSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder={t('QRCodePlaceholder')}
            value={qrCode}
            onChange={(e) => {
              setQrCode(e.target.value);
              setError('');
            }}
            className="border border-gray-300 rounded-md p-2"
            required
          />
          {error && <p className="text-red-600">{error}</p>}
          <button type="submit" className="purchase-button">{t('SubmitQRCode')}</button>
        </form>
      </motion.section>

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
        <h2 className="text-2xl font-bold mb-2">{t('HowToBecomeChosen')}</h2>
        <p className="mb-4">{t('HowToBecomeChosenDescription')}</p>
        <a
          href="https://wa.me/989125574218?text=Hi,%20I%20want%20to%20learn%20how%20to%20become%20a%20Chosen%20Creator!"
          className="purchase-button animate-pulse"
        >
          {t('LearnHow')}
        </a>
      </motion.section>

      <Link to="/shop/#/" className="purchase-button">{t('BackToShop')}</Link>
    </div>
  );
}

export default JoinChosen;