import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="max-h-[50px]">
      <nav className="flex justify-between w-full">
        <div className="flex items-center gap-1 text-lg sm:text-xl font-bold sm:py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="-rotate-45 w-6 h-6 sm:w-8 sm:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          Generate My Career
        </div>
        {!!user && (
          <div className="flex items-center gap-2 border border-gray-300 rounded-full shadow-md">
            <div className="flex items-center pl-1 sm:pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm sm:text-base sm:mr-1">{user.credits}</p>
              <p className="hidden sm:block">Credits</p>
            </div>
            <div className="h-full border border-r-gray-300"></div>
            <Link
              className="flex items-center gap-2 py-1 pr-1 sm:pr-4"
              to={'/account/profile'}
            >
              <div className="text-white bg-purple-500 border rounded-full overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="relative top-1 w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="capitalize hidden sm:block">
                {user.name || user.email.split('@')[0]}
              </p>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
