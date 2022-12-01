import { getUnassignedCol, getUnassignedColWithName } from "../model/collector";
const getAllCollector = async (req, res, next) => {
  const name = req.query.name;
  const week = req.query.week;
  const month = req.query.week;
  if (name === undefined) {
    res.status(200).json(getUnassignedCol(month, week));
  } else {
    res.status(200).json(getUnassignedColWithName(month, week, name));
  }
};

module.exports = { getAllCollector };
