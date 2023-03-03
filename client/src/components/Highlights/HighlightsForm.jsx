import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PLACEHOLDER =
  '* I organized a charity event for a local animal shelter and raised over $10,000 in donations through social media campaigns and networking with local businesses (great display of marketing skill, leadership, project management)\n* I developed a mobile application that helps users track their stats in a popular video game. It has over 1 million downloads. (demonstrates your ability to make good software and a great user experience)\n* I volunteered as a tax preparer for low-income individuals and families through a local non-profit organization. I prepared over 200 tax returns and helped clients secure over $250,000 in refunds and credits (shows strong understanding of tax laws and regulations).';

export default function HighlightsForm({
  editedHighlight,
  setEditedHighlight,
  setIsEditing,
  setHighlights,
}) {
  const [title, setTitle] = useState(editedHighlight?.title || '');
  const [details, setDetails] = useState(editedHighlight?.details || '');
  const location = useLocation();

  const handleClickedCancel = () => {
    setEditedHighlight(null);
    setIsEditing(false);
  };

  const addHighlight = (e) => {
    e.preventDefault();

    if (editedHighlight !== null) {
      setHighlights((prev) =>
        prev.map((h) => {
          if (h.title === editedHighlight.title) {
            return {
              title,
              details,
            };
          } else {
            return h;
          }
        })
      );
    } else {
      setHighlights((prev) => [
        ...prev,
        {
          title,
          details,
        },
      ]);
    }

    setEditedHighlight(null);
    setIsEditing(false);
  };

  return (
    <form className="w-full space-y-4" onSubmit={addHighlight}>
      {location.pathname === '/generate-my-cover-letter' ? (
        <h2 className="text-center mb-4">
          {editedHighlight === null ? 'Add Highlight' : 'Edit Highlight'}
        </h2>
      ) : (
        <h1 className="text-center mb-8">
          {editedHighlight === null ? 'Add Highlight' : 'Edit Highlight'}
        </h1>
      )}
      <fieldset>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Tax refunds for low-income individuals"
          value={title}
          onInput={(e) => setTitle(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="details">Details</label>
        <textarea
          id="details"
          name="details"
          className="h-[150px]"
          placeholder={PLACEHOLDER}
          value={details}
          onInput={(e) => setDetails(e.target.value)}
        />
      </fieldset>
      <div className="flex justify-between">
        <button
          className="border border-gray-500"
          type="button"
          onClick={handleClickedCancel}
        >
          Cancel
        </button>
        <button className="text-white bg-purple-500" type="submit">
          {editedHighlight === null ? 'Add Highlight' : 'Edit Highlight'}
        </button>
      </div>
    </form>
  );
}
