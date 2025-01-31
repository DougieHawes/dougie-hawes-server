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
    const { title, image, siteLink, codeLink, description, category } =
      req.body;

    res
      .status(200)
      .json({ title, image, siteLink, codeLink, description, category });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
