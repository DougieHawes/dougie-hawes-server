export const getProducts = (req, res) => {
  res.status(200).json({ msg: "getProducts" });
};

export const getProduct = (req, res) => {
  res.status(200).json({ msg: `get product ${req.params.productid}` });
};

export const createProduct = (req, res) => {
  res.status(200).json({ msg: "createProduct" });
};
