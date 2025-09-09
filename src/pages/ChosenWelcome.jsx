import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';

function ChosenWelcome() {
  const { t } = useTranslation();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('user');

  const [name, setName] = useState('');
  const [engravingText, setEngravingText] = useState('');
  const [boxSize, setBoxSize] = useState('small');
  const [hasBadge, setHasBadge] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [screenshotSubmitted, setScreenshotSubmitted] = useState(false);

  if (!userId) {
    return (
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('Access Restricted')}</h1>
        <p className="text-gray-600 mb-6">{t('Chosen Access Message')}</p>
        <Link to="/" className="purchase-button">{t('Back to Shop')}</Link>
      </div>
    );
  }

  const handleEngravingSubmit = (e) => {
    e.preventDefault();
    if (!hasBadge) {
      alert(t('Badge Required'));
      return;
    }
    setFormSubmitted(true);
    window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(
      t('Engraving Request Message', { name, boxSize, engravingText })
    )}`;
  };

  const handleJoinClub = () => {
    window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('Join Club Message'))}`;
  };

  const handleScreenshotSubmit = () => {
    setScreenshotSubmitted(true);
    window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('Screenshot Message'))}`;
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {t('Welcome Chosen Creator')}
      </h1>
      <p className="text-gray-600 mb-6">
        {name ? t('Personalized Welcome', { name }) : t('Chosen Explanation')}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('Your Exclusive Journey')}</h2>
        <p className="text-gray-600 mb-4">{t('Journey Overview')}</p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>{t('Follow for Discount')}</li>
          <li>{t('Share for Cashback')}</li>
          <li>{t('Refer for Badge')}</li>
          <li>{t('Badge Unlocks')}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('Your Gift Package')}</h2>
        <p className="text-gray-600 mb-4">{t('Package Description')}</p>
        <img
          src="./assets/images/comic-visual.png"
          alt={t('Collectible Comic')}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('Start Your Journey')}</h2>
        <p className="text-gray-600 mb-4">{t('Journey Description')}</p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/aquariusaccs/" className="purchase-button">
            {t('Follow on Instagram')}
          </a>
          <button onClick={handleJoinClub} className="purchase-button">
            {t('Join Club')}
          </button>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('Unlock Rewards')}</h2>
        <p className="text-gray-600 mb-4">{t('Unlock Description')}</p>
        {!screenshotSubmitted ? (
          <button onClick={handleScreenshotSubmit} className="purchase-button">
            {t('Submit Screenshot')}
          </button>
        ) : (
          <p className="text-gray-600">{t('Screenshot Submitted')}</p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('Personalize Your Keepsake')}</h2>
        <p className="text-gray-600 mb-4">{t('Engraving Description')}</p>
        {!formSubmitted ? (
          <form onSubmit={handleEngravingSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder={t('Your Name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
              required
            />
            <select
              value={boxSize}
              onChange={(e) => setBoxSize(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="small">{t('Small Box')}</option>
              <option value="medium">{t('Medium Box')}</option>
              <option value="large">{t('Large Box')}</option>
            </select>
            <input
              type="text"
              placeholder={t('Engraving Text')}
              value={engravingText}
              onChange={(e) => setEngravingText(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
              maxLength={20}
              required
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={hasBadge}
                onChange={(e) => setHasBadge(e.target.checked)}
              />
              {t('I Have Good Friend Badge')}
            </label>
            <button type="submit" className="purchase-button">{t('Submit Engraving')}</button>
          </form>
        ) : (
          <p className="text-gray-600">{t('Engraving Submitted', { name, boxSize, engravingText })}</p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('Refer a Friend')}</h2>
        <p className="text-gray-600 mb-4">{t('Referral Description')}</p>
        <Link to="/" className="purchase-button">{t('Go to Shop')}</Link>
      </section>
    </div>
  );
}

export default ChosenWelcome;