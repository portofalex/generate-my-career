import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import WorkExperienceList from './WorkExperienceList';
import WorkExperienceForm from './WorkExperienceForm';

const HAS_NO_WORK_EXPERIENCES_TEXT =
  "Oh no! It looks like you don't have any work experience added. Make sure to add that below. Any work experience you add will be saved for convenience in the future.";
const HAS_WORK_EXPERIENCES_TEXT =
  "Add your work experience. Ideally, you want to pick from experiences that are most relevant to the role that you're applying to. Your experiences will be saved in case you want to use them in the future.";

export default function WorkExperienceStep({
  step,
  setStep,
  workExperiences,
  setWorkExperiences,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWorkExperience, setEditedWorkExperience] = useState(null);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickedNext = () => {
    axios
      .put(`/users/${user.id}/profile/work-experiences`, { workExperiences })
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.error(error);
        alert('You must be logged in to view this page.');
        navigate('/login');
      });
    setStep(step + 1);
  };

  return (
    <div className="w-full max-w-xl p-4 mx-auto space-y-4 border border-gray-300 rounded-md shadow-md">
      <div className="grow space-y-2">
        {!isEditing && (
          <>
            <p className="text-sm text-gray-500">Step {step} of 3</p>
            <h2>Work Experience</h2>
            {workExperiences.length === 0 && (
              <p className="text-sm text-gray-500 mb-2">
                {HAS_NO_WORK_EXPERIENCES_TEXT}
              </p>
            )}
            {workExperiences.length > 0 && (
              <p className="text-sm text-gray-500 mb-2">
                {HAS_WORK_EXPERIENCES_TEXT}
              </p>
            )}
            <WorkExperienceList
              workExperiences={workExperiences}
              setEditedWorkExperience={setEditedWorkExperience}
              setIsEditing={setIsEditing}
            />
          </>
        )}
        {isEditing && (
          <WorkExperienceForm
            editedWorkExperience={editedWorkExperience}
            setEditedWorkExperience={setEditedWorkExperience}
            setIsEditing={setIsEditing}
            setWorkExperiences={setWorkExperiences}
          />
        )}
      </div>
      {!isEditing && (
        <div className="flex justify-end">
          <button
            className="text-white bg-purple-500"
            onClick={handleClickedNext}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
