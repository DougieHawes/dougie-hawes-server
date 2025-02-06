import multer from "multer";
import path from "path";

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

    console.log(req.body);

    if (!title || !siteLink || !codeLink || !description || !category) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const imagePaths = req.files.map((file) => file.path);

    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one image is required" });
    }

    const newWork = new Work({
      title,
      images: imagePaths,
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
