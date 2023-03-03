import { Link } from 'react-router-dom';
import CoverLetterResult from '../components/CoverLetter/CoverLetterResult';

export default function WriteCoverLetterResultsPage({ orders }) {
  return (
    <div>
      <h1 className="text-center mt-8 mb-1 sm:mb-2">Results</h1>
      <p className="max-w-xs sm:max-w-md text-sm text-center text-gray-500 mb-6 sm:mb-8 mx-auto">
        Please wait about 10-20 seconds while our little robots generate 3
        variations of your cover letter. These are high-level views of your
        results. View them in{' '}
        <Link
          to={'/account/cover-letters'}
          className="underline hover:text-purple-500 transition-colors"
        >
          Your Collection
        </Link>{' '}
        to interact with them.
      </p>
      <div className="2xl:grid 2xl:grid-cols-2 2xl:gap-8">
        <CoverLetterResult order={orders[0]} />
        <CoverLetterResult order={orders[1]} />
        <div className="2xl:col-span-2 3xl:col-span-1">
          <CoverLetterResult order={orders[2]} />
        </div>
      </div>
    </div>
  );
}
