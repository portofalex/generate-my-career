import CoverLetter from "./CoverLetter";

export default function CoverLetterList({ coverLetters }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
      {coverLetters.map((coverLetter) => (
        <CoverLetter key={coverLetter._id} coverLetter={coverLetter} />
      ))}
    </div>
  );
}
