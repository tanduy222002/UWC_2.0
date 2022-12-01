import { getAllRoutes } from "../model/route";

const getAllRoutes = async (req, res, next) => {
  if (req.query.name == NULL) {
    res.status(200).json(getAllRoutes());
  } else {
    res.status(200).json("Get route by name");
  }
};

module.exports = { getAllRoutes };
