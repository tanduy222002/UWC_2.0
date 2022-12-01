import { getAllRoutes } from "../model/route";

const getAllRoutes = async (req, res, next) => {
  const name = req.query.name;
  const week = req.query.week;
  const month = req.query.week;
  if (name == NULL) {
    res.status(200).json(getAllRoutes());
  } else {
    res.status(200).json("Get route by name");
  }
};

module.exports = { getAllRoutes };
