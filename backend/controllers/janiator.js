import { getUnassignedJan } from "../model/janiator";

const getAllJaniator = async (req, res, next) => {
  const week = req.query.week;
  const month = req.query.week;
  res.status(200).json(getUnassignedJan(month, week));
};

module.exports = { getAllJaniator };
