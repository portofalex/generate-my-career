export default function WorkExperienceList({
  workExperiences,
  setEditedWorkExperience,
  setIsEditing,
}) {
  const openEditWorkExperience = (workExperience) => {
    setEditedWorkExperience(workExperience);
    setIsEditing(true);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {workExperiences.map((w) => (
        <button
          key={`${w.company}-${w.jobTitle}`}
          className="w-full h-20 text-sm sm:text-base flex flex-col items-center justify-center border border-gray-300 rounded-md shadow-sm"
          type="button"
          onClick={() => openEditWorkExperience(w)}
        >
          {w.company}
        </button>
      ))}
      <button
        className="w-full h-20 text-sm sm:text-base flex items-center justify-center border border-gray-300 rounded-md"
        type="button"
        onClick={() => setIsEditing(true)}
      >
        <p className="text-gray-500">Add Work Experience</p>
      </button>
    </div>
  );
}
