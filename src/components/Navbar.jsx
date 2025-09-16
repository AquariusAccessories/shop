import { useTranslation } from 'react-i18next';
     import { Link } from 'react-router-dom';
     import { FaStar } from 'react-icons/fa';

     function Navbar({ toggleSidebar }) {
       const { t } = useTranslation();

       return (
         <div className="md:hidden navbar shadow-md p-4 flex justify-between items-center">
           <Link to="/">
             <img
               src="./assets/images/aquarius-logo.jpg"
               alt={t('Brand')}
               className="navbar-logo"
             />
           </Link>
           <div className="flex gap-4 items-center">
             <Link to="/join-chosen" className="text-white hover:text-gray-200 transition-colors">
               <FaStar color="white" size={24} title={t('JoinChosen')} />
             </Link>
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