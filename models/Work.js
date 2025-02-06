import mongoose from "mongoose";

const WorkSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  siteLink: {
    type: String,
    required: true,
  },
  codeLink: {
    type: String,
    required: true,
  },
  codeLinkAux: { type: String },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Work = mongoose.model("Work", WorkSchema);

export default Work;
