const { getUnassignedJan } =require("../model/janiator") 

const getAllJaniator = async (req, res, next) => {
  const week = Number(req.query.week);
  const month = Number(req.query.month);
  res.status(200).json(getUnassignedJan(month, week));
};

module.exports = { getAllJaniator };
