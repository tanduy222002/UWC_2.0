const getAllProductsStatic = async (req, res, next) => {
  res.status(200).json({ msg: "All products static" });
};

const getAllProducts = async (req, res, next) => {
  res.status(200).json({ msg: "All products" });
};

module.exports = { getAllProducts, getAllProductsStatic };
