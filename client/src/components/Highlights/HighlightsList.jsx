export default function HighlightsList({
  highlights,
  setEditedHighlight,
  setIsEditing,
}) {
  const openEditHighlight = (highlight) => {
    setEditedHighlight(highlight);
    setIsEditing(true);
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {highlights.map((h) => (
        <button
          key={h.title}
          className="capitalize text-xs sm:text-sm w-full h-20 flex flex-col items-center justify-center border border-gray-300 rounded-md shadow-sm"
          type="button"
          onClick={() => openEditHighlight(h)}
        >
          {h.title}
        </button>
      ))}
      <button
        className="w-full h-20 text-xs sm:text-sm flex items-center justify-center border border-gray-300 rounded-md"
        type="button"
        onClick={() => setIsEditing(true)}
      >
        <p className="text-gray-500">Add Highlight</p>
      </button>
    </div>
  );
}
