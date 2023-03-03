const mongoose = require('mongoose');

const coverLetterSchema = mongoose.Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
    ownedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CoverLetter', coverLetterSchema);
