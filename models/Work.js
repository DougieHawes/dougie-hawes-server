import mongoose from "mongoose";

const WorkSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  siteLink: {
    type: String,
    required: true,
  },
  codeLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Work = mongoose.model("Work", WorkSchema);

export default Work;
