import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/ui/Loading';

export default function CoverLetterViewPage() {
  const [coverLetter, setCoverLetter] = useState(null);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { id } = useParams();

  const updateTitle = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(`/cover-letters/${coverLetter._id}`, {
        title,
      });
      console.log(data);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCoverLetter = async () => {
    try {
      const { data } = await axios.delete(`/cover-letters/${id}`);
      console.log(data);
      navigate('/account/cover-letters');
    } catch (error) {
      console.error(error);
      if (error.response.status === 401) {
        alert(error.response.data.message);
        navigate('/login');
      }
    }
  };

  useEffect(() => {
    const fetchCoverLetter = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/cover-letters/${id}`);
        console.log(data);
        setCoverLetter(data);
        setTitle(data.title);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoverLetter();
  }, []);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing, inputRef]);

  if (isLoading || !coverLetter) {
    return <Loading />;
  }

  return (
    <div className="mt-8">
      <h1 className="text-center capitalize mb-2">My Cover Letter</h1>
      <p className="max-w-xs sm:max-w-lg text-center text-gray-500 text-sm sm:text-base mb-6 sm:mb-8 mx-auto">
        Here is your cover letter. You can edit its title, click the clipboard
        icon to copy its text to your clipboard, or you can delete it entirely.
      </p>
      {!isEditing ? (
        <div
          className="flex justify-center items-center gap-2 text-center mb-1 sm:mb-2 cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          <h2 className="capitalize font-medium">{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
        </div>
      ) : (
        <input
          ref={inputRef}
          className="block min-w-[200px] h-[24px] sm:h-[32px] mb-1 sm:mb-2 mx-auto"
          type="text"
          value={title}
          onBlur={updateTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
      )}
      <div className="relative aspect-[8.5/11] max-w-2xl text-[6.73px] sm:text-[12px] md:text-[13.33px] p-[37.87px] sm:p-[57.75px] md:p-[62.59px] mx-auto mb-6 sm:mb-8 border border-gray-300 shadow-lg whitespace-pre-wrap">
        <div
          className="absolute top-3 right-3 sm:top-5 sm:right-5 text-gray-500 hover:text-gray-700 hover:cursor-pointer transition-colors"
          onClick={() => {
            setShowTooltip(true);
            navigator.clipboard.writeText(coverLetter.content);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:w-8 sm:h-8"
          >
            <path
              fillRule="evenodd"
              d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z"
              clipRule="evenodd"
            />
            <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z" />
            <path d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z" />
          </svg>
          <p
            className={`absolute top-0 -left-1/2 text-white bg-purple-500 rounded-md py-1 px-2 ${
              showTooltip ? 'tooltip-active' : 'tooltip-hidden'
            }`}
            onTransitionEnd={() => setShowTooltip(false)}
          >
            Copied!
          </p>
        </div>
        {coverLetter.content}
      </div>
      <button
        className="flex items-center gap-1 text-sm sm:text-base text-white bg-red-500 mx-auto hover:bg-red-700 transition-colors"
        onClick={deleteCoverLetter}
      >
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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
        Delete Cover Letter
      </button>
    </div>
  );
}
