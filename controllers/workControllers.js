import Work from "../models/Work.js";

export const getWork = async (req, res) => {
  try {
    const workItems = await Work.find();
    res.status(200).json(workItems);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getWorkItem = async (req, res) => {
  const { workid } = req.params;

  try {
    const workItem = await Work.findById({ _id: workid });
    res.status(200).json(workItem);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createWorkItem = async (req, res) => {
  try {
    const { title, siteLink, codeLink, codeLinkAux, description, category } =
      req.body;

    const image1 = req.files["image1"]
      ? `/uploads/${req.files["image1"][0].filename}`
      : null;
    const image2 = req.files["image2"]
      ? `/uploads/${req.files["image2"][0].filename}`
      : null;
    const image3 = req.files["image3"]
      ? `/uploads/${req.files["image3"][0].filename}`
      : null;

    if (!title || !siteLink || !codeLink || !description || !category) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newWork = new Work({
      title,
      image1,
      image2,
      image3,
      siteLink,
      codeLink,
      codeLinkAux,
      description,
      category,
    });

    await newWork.save();

    res.status(200).json(newWork);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
