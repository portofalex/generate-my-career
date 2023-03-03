import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PLACEHOLDER =
  '* developed and implemented an automated testing framework, resulting in a 50% reduction in testing time\n* designed and implemented a scalable microservices architecture for our web app, resulting in a 30% increase in app performance\n* led a team of software engineers in the development of a new product';

export default function WorkExperienceForm({
  editedWorkExperience,
  setEditedWorkExperience,
  setIsEditing,
  setWorkExperiences,
}) {
  const [company, setCompany] = useState(editedWorkExperience?.company || '');
  const [jobTitle, setJobTitle] = useState(
    editedWorkExperience?.jobTitle || ''
  );
  const [years, setYears] = useState(editedWorkExperience?.years || 1);
  const [details, setDetails] = useState(editedWorkExperience?.details || '');
  const location = useLocation();

  console.log(location.pathname);

  const handleClickedCancel = () => {
    setEditedWorkExperience(null);
    setIsEditing(false);
  };

  const addWorkExperience = (e) => {
    e.preventDefault();

    if (editedWorkExperience !== null) {
      setWorkExperiences((prev) =>
        prev.map((w) => {
          if (
            `${w.company}-${w.jobTitle}` ===
            `${editedWorkExperience.company}-${editedWorkExperience.jobTitle}`
          ) {
            return {
              company,
              jobTitle,
              years,
              details,
            };
          } else {
            return w;
          }
        })
      );
    } else {
      setWorkExperiences((prev) => [
        ...prev,
        {
          company,
          jobTitle,
          years,
          details,
        },
      ]);
    }

    setEditedWorkExperience(null);
    setIsEditing(false);
  };

  return (
    <form className="space-y-4" onSubmit={addWorkExperience}>
      {location.pathname === '/generate-my-cover-letter' ? (
        <h2 className="text-center mb-4">
          {editedWorkExperience === null
            ? 'Add Work Experience'
            : 'Edit Work Experience'}
        </h2>
      ) : (
        <h1 className="text-center mb-8">
          {editedWorkExperience === null
            ? 'Add Work Experience'
            : 'Edit Work Experience'}
        </h1>
      )}
      <fieldset>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={company}
          onInput={(e) => setCompany(e.target.value)}
          placeholder="Bonky Inc."
        />
      </fieldset>
      <fieldset>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          id="jobTitle"
          name="jobTitle"
          type="text"
          value={jobTitle}
          onInput={(e) => setJobTitle(e.target.value)}
          placeholder="Senior Software Engineer"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="years">Years of Experience</label>
        <input
          id="years"
          name="years"
          type="number"
          value={years}
          onInput={(e) => setYears(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="details">Details</label>
        <p className="text-sm text-gray-500">
          Provide some details about your experience here. You can choose to go
          free-form or you can follow the example below.
        </p>
        <textarea
          id="details"
          name="details"
          className="h-[150px]"
          value={details}
          onInput={(e) => setDetails(e.target.value)}
          placeholder={PLACEHOLDER}
        />
      </fieldset>
      <div className="flex justify-between">
        <button
          className="text-sm sm:text-basea border border-gray-500"
          type="button"
          onClick={handleClickedCancel}
        >
          Cancel
        </button>
        <button
          className="text-sm sm:text-base text-white bg-purple-500"
          type="submit"
        >
          {editedWorkExperience === null
            ? 'Add Work Experience'
            : 'Edit Work Experience'}
        </button>
      </div>
    </form>
  );
}
