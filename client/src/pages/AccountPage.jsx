import { Link, useParams } from 'react-router-dom';
import CoverLettersPage from './CoverLettersPage';
import ProfilePage from './ProfilePage';

export default function AccountPage() {
  const { subpage } = useParams();

  const getLinkClass = (type = null) => {
    let classList = 'relative sm:w-[160px] py-2 px-4 rounded-full';

    if (type === subpage) {
      classList += ' text-white bg-purple-500';
    } else {
      classList += ' text-gray-500';
    }

    return classList;
  };

  return (
    <div className="relative grow mt-8">
      <nav className="text-center mb-8">
        <ul className="inline-flex justify-center border border-gray-300 rounded-full shadow-md">
          <li className={getLinkClass('cover-letters')}>
            <Link
              className="sm:flex sm:justify-center sm:items-center sm:gap-1"
              to={'/account/cover-letters'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hidden sm:block w-5 h-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              Cover Letters
            </Link>
          </li>
          <li className={getLinkClass('resumes')}>
            <p>Resumes</p>
            <p className="text-xs w-[100px] absolute -rotate-[4deg] -top-2 right-0 sm:right-6 text-white bg-orange-500 px-1">
              Coming Soon!
            </p>
          </li>
          <li className={getLinkClass('profile')} disabled>
            <Link
              className="sm:flex sm:justify-center sm:items-center sm:gap-1"
              to={'/account/profile'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hidden sm:block w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      {subpage === 'cover-letters' && <CoverLettersPage />}
      {subpage === 'profile' && <ProfilePage />}
    </div>
  );
}
