const User = require('../models/User');

// get user with token
exports.getCurrentUser = async (req, res) => {
  const token = req.token;

  try {
    const { _id, name, email, credits } = await User.findById(token.id);
    return res.status(200).json({
      id: _id,
      name,
      email,
      credits,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Something bad happened...' });
  }
};

exports.getUserProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    const { workExperiences, highlights } = user.profile;

    return res.status(200).json({ workExperiences, highlights });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Something bad happened.' });
  }
};

exports.updateUserProfile = async (req, res) => {
  const { id } = req.params;
  const { workExperiences, highlights } = req.body;

  try {
    await User.findByIdAndUpdate(id, {
      $set: {
        'profile.workExperiences': workExperiences,
        'profile.highlights': highlights,
      },
    });
    return res
      .status(200)
      .json({ message: 'Updated user profile successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Something bad happened...' });
  }
};

exports.updateUserWorkExperiences = async (req, res) => {
  const { id } = req.params;
  const { workExperiences } = req.body;

  try {
    await User.findByIdAndUpdate(id, {
      $set: {
        'profile.workExperiences': workExperiences,
      },
    });
    return res
      .status(200)
      .json({ message: 'Updated user work experiences successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Something bad happened...' });
  }
};

exports.updateUserHighlights = async (req, res) => {
  const { id } = req.params;
  const { highlights } = req.body;

  try {
    await User.findByIdAndUpdate(id, {
      $set: {
        'profile.highlights': highlights,
      },
    });
    return res
      .status(200)
      .json({ message: 'Updated user highlights successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Something bad happened...' });
  }
};

exports.updateUserCredits = async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;

  try {
    const user = await User.findById(id);

    // middleware should prevent this from happening
    if (!user) {
      return res.status(401).json({ message: 'User does not exist.' });
    }

    const { credits } = user;

    if (credits + amount < 0) {
      return res.status(400).json({ message: 'Insufficient credits.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Something bad happened...' });
  }

  try {
    const user = await User.findByIdAndUpdate(id, {
      $inc: { credits: amount },
    });
    return res.status(200).json({
      message: `Updated user credits successfully. User now has ${
        user.credits + amount
      } credits.`,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Something bad happened...' });
  }
};
