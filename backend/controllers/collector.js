const { getUnassignedCol, getUnassignedColWithName } =require("../model/collector");
const getAllCollector = async (req, res, next) => {
  const name = req.query.name;
  const week = Number(req.query.week);
  const month = Number(req.query.month);
  if (name === undefined) {
    res.status(200).json(getUnassignedCol(month, week));
  } else {
    res.status(200).json(getUnassignedColWithName(month, week, name));
  }
};

module.exports = { getAllCollector };
