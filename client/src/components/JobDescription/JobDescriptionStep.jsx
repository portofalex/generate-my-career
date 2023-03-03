import JobDescriptionForm from './JobDescriptionForm';

export default function JobDescriptionStep({
  step,
  setStep,
  jobDescription,
  setJobDescription,
  generateCoverLetter,
}) {
  return (
    <div className="max-w-xl sm:min-w-xl p-4 mx-auto space-y-4 border border-gray-300 rounded-md shadow-md">
      <div className="space-y-2">
        <p className="text-sm text-gray-500">Step {step} of 3</p>
        <h2>Job Description</h2>
        <JobDescriptionForm
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
        />
      </div>
      <div className="flex justify-between">
        <button
          className="border border-gray-500"
          onClick={() => setStep(step - 1)}
        >
          Back
        </button>
        <button
          className="flex text-white bg-purple-500"
          onClick={generateCoverLetter}
        >
          <span className="">Generate (</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="yellow"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="text-black w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="mr-1">100 Credits</span>
          <span>)</span>
        </button>
      </div>
    </div>
  );
}
