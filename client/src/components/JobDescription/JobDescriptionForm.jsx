const PLACEHOLDER =
  "We are seeking a highly skilled Software Engineer to join our dynamic and innovative team. As a Software Engineer, you will be responsible for developing and maintaining software applications that meet the needs of our clients. You will be working on a wide range of projects, from web applications to mobile applications and everything in between.\n\nResponsibilities:\nDesign, develop and maintain software applications\nCollaborate with cross-functional teams to identify and solve complex software problems\nWrite clean, efficient and well-documented code\nConduct unit testing and debugging to ensure software functions properly\nParticipate in code reviews to maintain code quality\n\nQualifications:\nBachelor's degree in Computer Science or related field\nStrong experience in software development using various programming languages such as Python, Java, C++, etc.\nExperience with web technologies such as HTML, CSS, and JavaScript\nFamiliarity with software development tools and frameworks such as Git, Docker, and React\n\nIf you are a highly motivated Software Engineer who is passionate about creating innovative software solutions and working on cutting-edge technologies, we want to hear from you!";

export default function JobDescriptionForm({
  jobDescription,
  setJobDescription,
}) {
  return (
    <form>
      <fieldset>
        <p className="text-sm text-gray-500">
          Copy-paste the job description of the role you're applying to. Don't
          worry if the format doesn't look like the example below. The more
          information about the role, the better.
        </p>
        <textarea
          className="min-h-[150px]"
          placeholder={PLACEHOLDER}
          value={jobDescription}
          onInput={(e) => setJobDescription(e.target.value)}
        />
      </fieldset>
    </form>
  );
}
