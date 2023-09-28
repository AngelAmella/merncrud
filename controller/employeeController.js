const Employee = require('../model/employeeModel')
const mongoose = require("mongoose")



//POST
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

//GET 
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({}).sort({updatedAt: -1});
    res.status(200).json(employees);
  }catch(err){
    res.status(500).json({error:err.message});
  }
}
const getEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Employee Found" });
  }

  try {
    const employee = await Employee.findById({ _id: id });
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

//DELETE
const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Employee Found" });
  }

  try {
    const employee = await Employee.findByIdAndDelete({ _id: id });
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
const deleteAllEmployees = async (req, res) => {
  try {
    const employee = await Employee.deleteMany();
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//UPDATE 
const updateEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Employee Found" });
  }

  try {
    const employee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!employee) throw Error("No Employee Found.");
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createEmployee,
  getEmployee,
  getEmployees,
  deleteEmployee,
  deleteAllEmployees,
  updateEmployee
}