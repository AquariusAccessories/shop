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
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('AccessRestricted')}</h1>
        <p className="text-gray-600 mb-6">{t('ChosenAccessMessage')}</p>
        <Link to="/" className="purchase-button">{t('BackToShop')}</Link>
      </div>
    );
  }

  const levels = [
    {
      id: 1,
      title: t('Level1Welcome'),
      task: t('Level1Task'),
      badge: t('FollowerStar'),
      reward: t('Level1Reward'),
      action: () => {
        setScreenshotSubmitted({ ...screenshotSubmitted, 1: true });
        window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('SubmitFollowScreenshot'))}`;
      },
      buttonText: screenshotSubmitted[1] ? t('ScreenshotSubmitted') : t('SubmitFollow'),
      prerequisite: null,
    },
    {
      id: 2,
      title: t('Level2Share'),
      task: t('Level2Task'),
      badge: t('StorytellerGem'),
      reward: t('Level2Reward'),
      action: () => {
        setScreenshotSubmitted({ ...screenshotSubmitted, 2: true });
        window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('SubmitShareScreenshot'))}`;
      },
      buttonText: screenshotSubmitted[2] ? t('ScreenshotSubmitted') : t('SubmitShare'),
      prerequisite: 1,
    },
    {
      id: 3,
      title: t('Level3Gift'),
      task: t('Level3Task'),
      badge: t('GoodFriendBadge'),
      reward: t('Level3Reward'),
      action: () => window.location.href = '/#/shop',
      buttonText: t('GoToShop'),
      prerequisite: 2,
    },
    {
      id: 4,
      title: t('Level4Loyal'),
      task: t('Level4Task'),
      badge: t('LoyalCreatorCrown'),
      reward: t('Level4Reward'),
      action: () => window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('CheckPurchaseAmount'))}`,
      buttonText: t('CheckPurchases'),
      prerequisite: 3,
    },
    {
      id: 5,
      title: t('Level5Elite'),
      task: t('Level5Task'),
      badge: t('EliteCreatorScepter'),
      reward: t('Level5Reward'),
      action: () => {
        setScreenshotSubmitted({ ...screenshotSubmitted, 5: true });
        window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('SubmitMentionScreenshot'))}`;
      },
      buttonText: screenshotSubmitted[5] ? t('ScreenshotSubmitted') : t('SubmitMention'),
      prerequisite: 4,
    },
    {
      id: 6,
      title: t('Level6Contributor'),
      task: t('Level6Task'),
      badge: t('ContributorBadge'),
      reward: t('Level6Reward'),
      action: () => {
        setScreenshotSubmitted({ ...screenshotSubmitted, 6: true });
        window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('SubmitCommentScreenshot'))}`;
      },
      buttonText: screenshotSubmitted[6] ? t('ScreenshotSubmitted') : t('SubmitComments'),
      prerequisite: 5,
    },
    {
      id: 7,
      title: t('Level7Ambassador'),
      task: t('Level7Task'),
      badge: t('AmbassadorBadge'),
      reward: t('Level7Reward'),
      action: () => {
        setScreenshotSubmitted({ ...screenshotSubmitted, 7: true });
        window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('SubmitFriendsFollowScreenshot'))}`;
      },
      buttonText: screenshotSubmitted[7] ? t('ScreenshotSubmitted') : t('SubmitFriendsFollow'),
      prerequisite: 6,
    },
    {
      id: 8,
      title: t('Level8Master'),
      task: t('Level8Task'),
      badge: t('MasterBadge'),
      reward: t('Level8Reward'),
      action: () => window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('SubmitDesignIdea'))}`,
      buttonText: t('SubmitDesign'),
      prerequisite: 7,
    },
    {
      id: 9,
      title: t('Level9Collector'),
      task: t('Level9Task'),
      badge: t('CollectorBadge'),
      reward: t('Level9Reward'),
      action: () => window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('CheckBoxCollection'))}`,
      buttonText: t('CheckCollection'),
      prerequisite: 8,
    },
    {
      id: 10,
      title: t('Level10Legend'),
      task: t('Level10Task'),
      badge: t('LegendBadge'),
      reward: t('Level10Reward'),
      action: () => window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(t('CheckLifetimePurchases'))}`,
      buttonText: t('CheckLifetimePurchases'),
      prerequisite: 9,
    },
  ];

  const handleEngravingSubmit = (e) => {
    e.preventDefault();
    if (!hasGoodFriendBadge) {
      alert(t('BadgeRequired'));
      return;
    }
    setFormSubmitted(true);
    window.location.href = `https://wa.me/989125574218?text=${encodeURIComponent(
      t('EngravingRequestMessage', { name, boxSize, engravingText })
    )}`;
  };

  const getPrerequisiteBadge = (prerequisite) => {
    if (!prerequisite) return null;
    const prereqLevel = levels.find((level) => level.id === prerequisite);
    return prereqLevel ? prereqLevel.badge : null;
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('WelcomeChosenCreator')}</h1>
      <p className="text-gray-600 mb-6">
        {name ? t('PersonalizedWelcome', { name }) : t('ChosenExplanation')}
      </p>

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
        <h2 className="text-2xl font-bold mb-2">{t('CreatorJourneyExplanation')}</h2>
        <p className="mb-4">{t('CreatorJourneyExplanationDescription')}</p>
      </motion.section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('YourCreatorJourney')}</h2>
        <p className="text-gray-600 mb-4 font-semibold">{t('MoreLevelsComing')}</p>
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
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('PersonalizeYourKeepsake')}</h2>
        <p className="text-gray-600 mb-4">{t('EngravingDescription')}</p>
        {!formSubmitted ? (
          <form onSubmit={handleEngravingSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder={t('YourName')}
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
              <option value="small">{t('SmallBox')}</option>
              <option value="medium">{t('MediumBox')}</option>
              <option value="large">{t('LargeBox')}</option>
            </select>
            <input
              type="text"
              placeholder={t('EngravingText')}
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
              {t('IHaveGoodFriendBadge')}
            </label>
            <button type="submit" className="purchase-button">{t('SubmitEngraving')}</button>
          </form>
        ) : (
          <p className="text-gray-600">{t('EngravingSubmitted', { name, boxSize, engravingText })}</p>
        )}
      </section>
    </div>
  );
}

export default ChosenWelcome;