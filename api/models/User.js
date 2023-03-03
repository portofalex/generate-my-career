const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
    },
    profile: {
      workExperiences: [
        {
          company: String,
          jobTitle: String,
          years: Number,
          details: String,
        },
      ],
      highlights: [{ title: String, details: String }],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
