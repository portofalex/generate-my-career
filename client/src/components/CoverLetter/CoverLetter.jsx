import { Link } from 'react-router-dom';

export default function CoverLetter({ coverLetter }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link className="" to={`/account/cover-letters/${coverLetter._id}`}>
        <p className="w-[200px] h-[260px] text-left text-[4px] border border-gray-300 py-[16px] px-[22px] mx-auto whitespace-pre-wrap shadow-md overflow-y-hidden">
          {coverLetter.content}
        </p>
      </Link>
      <p className="capitalize text-xs sm:text-sm">{coverLetter.title}</p>
    </div>
  );
}
