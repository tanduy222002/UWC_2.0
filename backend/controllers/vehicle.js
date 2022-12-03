const { getUnassignedVec } =require("../model/vehicle");
const getAllVehicle = async (req, res, next) => {
  const week = Number(req.query.week);
  const month = Number(req.query.month);
  res.status(200).json(getUnassignedVec(month, week));
};

module.exports = { getAllVehicle };
