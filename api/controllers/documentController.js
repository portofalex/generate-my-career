const CoverLetter = require('../models/CoverLetter');
const { generateCoverLetter } = require('../services/chatgpt');

exports.getCoverLetters = async (req, res) => {
  const token = req.token;

  try {
    const coverLetters = await CoverLetter.find({ ownedBy: token.id });
    return res.status(200).json(coverLetters);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Something bad happened...' });
  }
};

exports.getCoverLetter = async (req, res) => {
  const { id } = req.params;

  try {
    const coverLetter = await CoverLetter.findById(id);
    return res.status(200).json(coverLetter);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Something bad happened...' });
  }
};

exports.createCoverLetter = async (req, res) => {
  const token = req.token;
  const { workExperiences, highlights, jobDescription } = req.body;

  try {
    const coverLetterText = await generateCoverLetter(
      workExperiences,
      highlights,
      jobDescription
    );

    const coverLetter = await CoverLetter.create({
      title: 'untitled',
      content: coverLetterText.trim(),
      ownedBy: token.id,
    });

    return res.status(201).json(coverLetter);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error });
  }
};

exports.updateCoverLetter = async (req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  try {
    await CoverLetter.findByIdAndUpdate(id, {
      title: title,
    });
    res.status(200).json({ message: 'Cover letter updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Something bad happened...' });
  }
};

exports.deleteCoverLetter = async (req, res) => {
  const { id } = req.params;

  try {
    await CoverLetter.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: 'Cover letter deleted successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Something bad happened.' });
  }
};
