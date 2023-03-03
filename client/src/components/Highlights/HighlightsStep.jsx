import axios from 'axios';
import { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import HighlightsList from './HighlightsList';
import HighlightsForm from './HighlightsForm';

export default function HighlightsStep({
  step,
  setStep,
  highlights,
  setHighlights,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedHighlight, setEditedHighlight] = useState(null);
  const { user } = useContext(UserContext);

  const handleClickedNext = () => {
    axios
      .put(`/users/${user.id}/profile/highlights`, { highlights })
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
      <div className="space-y-2">
        {!isEditing && (
          <>
            <p className="text-sm text-gray-500">Step {step} of 3</p>
            <h2>Other Highlights (Optional)</h2>
            <p className="text-sm text-gray-500 mb-2">
              Add any projects, experiences, or passions that you want to
              highlight that would help you stand out? After all, we're much
              more than what we bring to our workplaces. Your highlights will be
              saved.
            </p>
            <HighlightsList
              highlights={highlights}
              setEditedHighlight={setEditedHighlight}
              setIsEditing={setIsEditing}
            />
          </>
        )}
        {isEditing && (
          <HighlightsForm
            editedHighlight={editedHighlight}
            setEditedHighlight={setEditedHighlight}
            setIsEditing={setIsEditing}
            setHighlights={setHighlights}
          />
        )}
      </div>
      {!isEditing && (
        <div className="flex justify-between">
          <button
            className="border border-gray-500"
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
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
