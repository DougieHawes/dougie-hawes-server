export const getWork = (req, res) => {
  res.status(200).json({ msg: "getWork" });
};

export const getWorkItem = (req, res) => {
  res.status(200).json({ msg: `get work ${req.params.workid}` });
};

export const createWorkItem = (req, res) => {
  res.status(200).json({ msg: "createWorkItem" });
};
