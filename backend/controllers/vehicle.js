import { getUnassignedVec } from "../model/vehicle";
const getAllVehicle = async (req, res, next) => {
  const week = req.query.week;
  const month = req.query.week;
  res.status(200).json(getUnassignedVec(month, week));
};

module.exports = { getAllVehicle };
