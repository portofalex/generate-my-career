import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Loading from '../components/ui/Loading';
import CoverLetterList from '../components/CoverLetter/CoverLetterList';

export default function CoverLettersPage() {
  const [coverLetters, setCoverLetters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoverLetters = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get('/cover-letters');
        setCoverLetters(
          data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        );
      } catch (error) {
        console.error(error);
        alert(error.response.data.message);
        if (error.response.status === 401) {
          navigate('/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoverLetters();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="text-center">
      <h1 className="mb-1 sm:mb-2">My Cover Letters</h1>
      {coverLetters.length === 0 && (
        <p className="max-w-xs sm:max-w-2xl text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 mx-auto">
          It looks like you don't have any cover letters yet. Go generate your
          first one! If you have generated some, try refreshing the page.
        </p>
      )}
      {coverLetters.length > 0 && (
        <p className="max-w-xs sm:max-w-2xl text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 mx-auto">
          Here are all your cover letters.{' '}
          <span className="block sm:inline-block">
            Click on them to enlarge.
          </span>
        </p>
      )}
      <div className="mb-6 sm:mb-8">
        <Link to={'/generate-my-cover-letter'}>
          <button className="inline-flex gap-1 text-sm sm:text-base text-white bg-purple-500 hover:bg-purple-700 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
            Generate Cover Letter
          </button>
        </Link>
      </div>
      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
