import { useTranslation } from 'react-i18next';

function Navbar({ toggleSidebar }) {
  const { t } = useTranslation();

  return (
    <div className="md:hidden navbar shadow-md p-4 flex justify-between items-center">
      <a href="/shop/#/">
        <img
          src="./assets/images/aquarius-logo.jpg"
          alt={t('Brand')}
          className="navbar-logo"
        />
      </a>
      <div className="flex gap-4 items-center">
        <a href="/shop/#/chosen-welcome" className="text-white hover:text-gray-200 transition-colors">
          {t('Chosen Creators')}
        </a>
        <button
          onClick={toggleSidebar}
          className="text-white text-3xl hover:text-gray-200 transition-colors"
        >
          ☰
        </button>
      </div>
    </div>
  );
}

export default Navbar;