import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ChosenWelcome() {
  const { t } = useTranslation();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('user');

  const [name, setName] = useState('');
  const [engravingText, setEngravingText] = useState('');
  const [boxSize, setBoxSize] = useState('small');
  const [completedLevels, setCompletedLevels] = useState([]);
  const [hasGoodFriendBadge, setHasGoodFriendBadge] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [screenshotSubmitted, setScreenshotSubmitted] = useState({ 1: false, 2: false, 5: false, 6: false, 7: false });

  if (!userId) {
    return (
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('Access Restricted')}</h1>
        <p className="text-gray-600 mb-6">{t('Chosen Access Message')}</p>
        <Link to="/" className="purchase-button">{t('Back to Shop')}</Link>
      </div>
    );
  }

  const levels = [
    {
      id: 1,
      title: t('Level 1: Welcome to the Journey'),
      task: t('Follow @aquariusaccs on Instagram and join the Chosen Creators Club.'),
      badge: t('Follower Star'),
      reward: t('20% off with CHOSEN20'),
      action: () => {
        setScreenshotSubmitted({ ...screenshotSubmitted, 1: true });
        window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('Submit Follow Screenshot'))}`;
      },
      buttonText: screenshotSubmitted[1] ? t('Screenshot Submitted') : t('Submit Follow'),
      prerequisite: null,
    },
    {
      id: 2,
      title: t('Level 2: Share the Sparkle'),
      task: t('Share a story, post, or reel with #ChosenByAquarius.'),
      badge: t('Storyteller Gem'),
      reward: t('10% cashback up to $20'),
      action: () => {
        setScreenshotSubmitted({ ...screenshotSubmitted, 2: true });
        window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('Submit Share Screenshot'))}`;
      },
      buttonText: screenshotSubmitted[2] ? t('Screenshot Submitted') : t('Submit Share'),
      prerequisite: 1,
    },
    {
      id: 3,
      title: t('Level 3: Gift a Friend'),
      task: t('Gift a friend using code GIFT in the Shop.'),
      badge: t('Good Friend Badge'),
      reward: t('Access exclusive engravable boxes'),
      action: () => window.location.href = '/#/shop',
      buttonText: t('Go to Shop'),
      prerequisite: 2,
    },
    {
      id: 4,
      title: t('Level 4: Loyal Creator'),
      task: t('Reach $100 in total purchases.'),
      badge: t('Loyal Creator Crown'),
      reward: t('Free engraving on one box'),
      action: () => window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('Check Purchase Amount'))}`,
      buttonText: t('Check Purchases'),
      prerequisite: 3,
    },
    {
      id: 5,
      title: t('Level 5: Elite Creator'),
      task: t('Mention @aquariusaccs in a reel/post with 500+ views or 50+ likes.'),
      badge: t('Elite Creator Scepter'),
      reward: t('Access exclusive Starlight Keychain'),
      action: () => {
        setScreenshotSubmitted({ ...screenshotSubmitted, 5: true });
        window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('Submit Mention Screenshot'))}`;
      },
      buttonText: screenshotSubmitted[5] ? t('Screenshot Submitted') : t('Submit Mention'),
      prerequisite: 4,
    },
    {
      id: 6,
      title: t('Level 6: Community Contributor'),
      task: t('Comment on 5 @aquariusaccs posts.'),
      badge: t('Contributor Badge'),
      reward: t('Early access to new product drops'),
      action: () => {
        setScreenshotSubmitted({ ...screenshotSubmitted, 6: true });
        window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('Submit Comment Screenshot'))}`;
      },
      buttonText: screenshotSubmitted[6] ? t('Screenshot Submitted') : t('Submit Comments'),
      prerequisite: 5,
    },
    {
      id: 7,
      title: t('Level 7: Brand Ambassador'),
      task: t('Get 3 friends to follow @aquariusaccs.'),
      badge: t('Ambassador Badge'),
      reward: t('15% discount on bundles'),
      action: () => {
        setScreenshotSubmitted({ ...screenshotSubmitted, 7: true });
        window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('Submit Friends Follow Screenshot'))}`;
      },
      buttonText: screenshotSubmitted[7] ? t('Screenshot Submitted') : t('Submit Friends Follow'),
      prerequisite: 6,
    },
    {
      id: 8,
      title: t('Level 8: Master Creator'),
      task: t('Create and share a custom design idea via WhatsApp.'),
      badge: t('Master Badge'),
      reward: t('Free custom product consultation'),
      action: () => window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('Submit Design Idea'))}`,
      buttonText: t('Submit Design'),
      prerequisite: 7,
    },
    {
      id: 9,
      title: t('Level 9: VIP Collector'),
      task: t('Collect all 3 box sizes.'),
      badge: t('Collector Badge'),
      reward: t('Free limited-edition accessory'),
      action: () => window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('Check Box Collection'))}`,
      buttonText: t('Check Collection'),
      prerequisite: 8,
    },
    {
      id: 10,
      title: t('Level 10: Legend'),
      task: t('Reach $500 in purchases.'),
      badge: t('Legend Badge'),
      reward: t('Lifetime 10% discount and exclusive events'),
      action: () => window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('Check Lifetime Purchases'))}`,
      buttonText: t('Check Lifetime Purchases'),
      prerequisite: 9,
    },
  ];

  const handleEngravingSubmit = (e) => {
    e.preventDefault();
    if (!hasGoodFriendBadge) {
      alert(t('Badge Required'));
      return;
    }
    setFormSubmitted(true);
    window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(
      t('Engraving Request Message', { name, boxSize, engravingText })
    )}`;
  };

  const getPrerequisiteBadge = (prerequisite) => {
    if (!prerequisite) return null;
    const prereqLevel = levels.find((level) => level.id === prerequisite);
    return prereqLevel ? prereqLevel.badge : null;
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('Welcome Chosen Creator')}</h1>
      <p className="text-gray-600 mb-6">
        {name ? t('Personalized Welcome', { name }) : t('Chosen Explanation')}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('Your Creator Journey')}</h2>
        <p className="text-gray-600 mb-4 font-semibold">{t('More Levels Coming')}</p>
        <div className="flex flex-col items-center gap-8">
          {levels.map((level, index) => (
            <div key={level.id} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`level-card p-4 rounded-md border w-full max-w-md ${
                  completedLevels.includes(level.id)
                    ? 'bg-green-100 border-green-500'
                    : screenshotSubmitted[level.id] || (level.id === 3 && hasGoodFriendBadge)
                    ? 'bg-yellow-100 border-yellow-500'
                    : 'bg-gray-100 border-gray-300 opacity-75'
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800">{level.title}</h3>
                <p className="text-gray-600">{t('Task')}: {level.task}</p>
                <p className="text-gray-600">{t('Badge')}: {level.badge}</p>
                <p className="text-gray-600">{t('Reward')}: {level.reward}</p>
                {level.prerequisite && (
                  <p className="text-gray-500 text-sm">
                    {t('Requires')}: {getPrerequisiteBadge(level.prerequisite)}
                  </p>
                )}
                <button
                  onClick={level.action}
                  className={`purchase-button mt-2 ${
                    screenshotSubmitted[level.id] || (level.id === 3 && hasGoodFriendBadge)
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                  disabled={screenshotSubmitted[level.id] || (level.id === 3 && hasGoodFriendBadge)}
                >
                  {level.buttonText}
                </button>
              </motion.div>
              {index < levels.length - 1 && <div className="zigzag-line"></div>}
            </div>
          ))}
        </div>
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
                checked={hasGoodFriendBadge}
                onChange={(e) => setHasGoodFriendBadge(e.target.checked)}
              />
              {t('I Have Good Friend Badge')}
            </label>
            <button type="submit" className="purchase-button">{t('Submit Engraving')}</button>
          </form>
        ) : (
          <p className="text-gray-600">{t('Engraving Submitted', { name, boxSize, engravingText })}</p>
        )}
      </section>
    </div>
  );
}

export default ChosenWelcome;